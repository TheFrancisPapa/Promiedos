import fastf1
import pandas as pd
import json
import os
import datetime

# Habilitar caché para no descargar datos redundantes (GitHub actions lo preservará con actions/cache si se configura)
# Guardamos el caché en el directorio .fastf1_cache temporal
cache_dir = '.fastf1_cache'
os.makedirs(cache_dir, exist_ok=True)
fastf1.Cache.enable_cache(cache_dir)

def format_lap_time(timedelta_obj):
    """Convierte un objeto timedelta a un string MM:SS.ms o SS.ms"""
    if pd.isna(timedelta_obj):
        return "-"
    total_seconds = timedelta_obj.total_seconds()
    minutes = int(total_seconds // 60)
    seconds = total_seconds % 60
    if minutes > 0:
        return f"{minutes}:{seconds:06.3f}"
    return f"{seconds:06.3f}"

def fetch_session_results(year, session_name):
    """Obtiene y formatea los resultados de una sesión específica"""
    try:
        # get_session intenta cargar la sesión. Si no hay datos (ej. todavía no ocurrió), lanzará error o devolverá datos vacíos.
        # Evento actual: Si queremos el evento actual, podemos pedir el último evento disputado, pero
        # get_session('latest', session_name) no siempre funciona bien para prácticas si el fin de semana está en curso.
        # Mejor buscar por año y ronda.
        
        # Para hacer esto dinámicamente "latest", necesitamos buscar el schedule
        schedule = fastf1.get_event_schedule(year)
        
        # Filtrar eventos pasados o en curso
        now = datetime.datetime.now(datetime.timezone.utc).replace(tzinfo=None)
        
        # Encontramos el evento más reciente o en curso
        # Un evento está en curso si ya pasó la fecha del evento menos unos días o podemos buscar el más reciente
        past_events = schedule[schedule['EventDate'] < now + pd.Timedelta(days=3)]
        if past_events.empty:
            return None
            
        latest_event = past_events.iloc[-1]
        
        session = fastf1.get_session(year, latest_event['RoundNumber'], session_name)
        session.load(telemetry=False, weather=False, messages=False) # Solo necesitamos resultados
        
        results = session.results
        if results is None or results.empty:
            return None
            
        print("Columns in results:", results.columns)
        
        formatted_results = []
        # FastF1 trae el resultado ordenado por posición en la práctica
        
        best_time = None
        if 'Time' in results.columns:
            # Filtramos nulos para sacar el mínimo
            valid_times = results['Time'].dropna()
            if not valid_times.empty:
                best_time = valid_times.min()
                
            # Ordenamos por tiempo
            results = results.sort_values(by='Time')
        
        position_counter = 1
        for index, row in results.iterrows():
            pos_raw = row.get('Position')
            if pd.notna(pos_raw):
                pos = int(float(pos_raw))
            else:
                pos = position_counter
                
            position_counter += 1
                
            driver_time = row.get('Time') if 'Time' in results.columns else None
            
            gap = "-"
            if not pd.isna(driver_time) and best_time is not None and pos > 1:
                # driver_time es timedelta
                gap_td = driver_time - best_time
                gap = f"+{gap_td.total_seconds():.3f}s"
            elif pos == 1:
                gap = "Líder"
                
            team_id = str(row.get('TeamId'))
            if pd.isna(row.get('TeamId')) or team_id == 'nan':
                team_id = str(row.get('TeamName', '')).lower().replace(' ', '_')
                
            driver_id = str(row.get('DriverId'))
            if pd.isna(row.get('DriverId')) or driver_id == 'nan':
                driver_id = str(row.get('Abbreviation', '')).lower()
                
            res_obj = {
                "position": str(pos),
                "driverId": driver_id,
                "driverName": str(row.get('FullName', '')),
                "teamId": team_id,
                "teamName": str(row.get('TeamName', '')),
                "Time": {
                    "time": format_lap_time(driver_time)
                },
                "gap": gap,
                "laps": str(int(row.get('Laps', 0) if pd.notna(row.get('Laps')) else 0))
            }
            
            # Extract Q1, Q2, Q3 if it's a qualifying session
            if 'Q1' in results.columns and not pd.isna(row.get('Q1')):
                res_obj['Q1'] = format_lap_time(row.get('Q1'))
            if 'Q2' in results.columns and not pd.isna(row.get('Q2')):
                res_obj['Q2'] = format_lap_time(row.get('Q2'))
            if 'Q3' in results.columns and not pd.isna(row.get('Q3')):
                res_obj['Q3'] = format_lap_time(row.get('Q3'))
                
            formatted_results.append(res_obj)
            
        return {
            "roundId": str(latest_event['RoundNumber']),
            "raceName": latest_event['EventName'],
            "data": formatted_results
        }
    except Exception as e:
        print(f"Error fetching {session_name}: {e}")
        return None

def main():
    # Usamos 2024 para demostración, ya que los datos de 2026 aún no existen en la API oficial de telemetría de F1.
    year = 2024
    
    # Agregamos Sprint Qualifying para fines de semana Sprint
    sessions = ['Practice 1', 'Practice 2', 'Practice 3', 'Sprint Qualifying']
    session_keys = ['FP1', 'FP2', 'FP3', 'SQ']
    
    final_data = {
        "roundId": "",
        "raceName": "",
        "sessions": {
            "FP1": [],
            "FP2": [],
            "FP3": [],
            "SQ": []
        }
    }
    
    for s_name, s_key in zip(sessions, session_keys):
        print(f"Fetching {s_name}...")
        res = fetch_session_results(year, s_name)
        if res and res['data']:
            final_data['roundId'] = res['roundId']
            final_data['raceName'] = res['raceName']
            final_data['sessions'][s_key] = res['data']
            print(f"Successfully fetched {len(res['data'])} results for {s_name}")
        else:
            print(f"No results for {s_name}")
            
    # Escribir a JSON
    # El archivo se guardará en src/data/practiceResults.json
    output_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'practiceResults.json')
    
    # Solo sobrescribir si hay datos para no borrar datos anteriores si hay fallos
    if final_data['roundId']:
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(final_data, f, indent=2, ensure_ascii=False)
        print(f"Data successfully saved to {output_path}")
    else:
        print("No data fetched. File was not updated.")

if __name__ == "__main__":
    main()

import { useEffect, useState } from 'react';
import { getDriverStandings, getConstructorStandings, getRaceSchedule } from '../services/api';
import { getTeamColor } from '../data/teamInfo';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useCategory } from '../context/CategoryContext';

export default function Home() {
  const { activeCategory, CATEGORIES } = useCategory();
  const [driverStandings, setDriverStandings] = useState([]);
  const [constructorStandings, setConstructorStandings] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [drivers, constructors, races] = await Promise.all([
        getDriverStandings(activeCategory),
        getConstructorStandings(activeCategory),
        getRaceSchedule(activeCategory)
      ]);
      setDriverStandings(drivers || []);
      setConstructorStandings(constructors || []);
      setSchedule(races || []);
      setLoading(false);
    }
    fetchData();
  }, [activeCategory]);

  if (loading) return <LoadingSkeleton variant="table" />;

  const currentCatData = CATEGORIES[activeCategory] || CATEGORIES.f1;
  const isF1 = activeCategory === 'f1';

  // Si no es F1 y no hay datos, mostrar mensaje de "Próximamente"
  if (!isF1 && driverStandings.length === 0 && schedule.length === 0) {
    return (
      <div className="container page-enter" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{currentCatData.icon}</div>
        <h1 style={{ color: 'var(--category-main-color)', marginBottom: '1rem' }}>{currentCatData.name}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Estamos preparando el terreno para integrar los resultados, posiciones y calendarios oficiales de {currentCatData.name}. ¡Próximamente!
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid-pattern"></div>
        <div className="container">
          <h1 className="hero-title">
            {currentCatData.name.toUpperCase()}<br />
            2026
          </h1>
          <p className="hero-subtitle">Estadísticas en vivo · Biografías · Análisis Técnico</p>
        </div>
      </section>

      {/* Tables Section */}
      <div className="container page-enter">
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '2rem' }}>

          {/* Tabla de Pilotos */}
          <div style={{ flex: '1 1 340px' }} className="card animate-in animate-delay-1">
            <div style={{ padding: '1rem 1.25rem', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid var(--border-color)' }}>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Campeonato de Pilotos</h2>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Piloto</th>
                  <th>Escudería</th>
                  <th className="text-right">Pts</th>
                </tr>
              </thead>
              <tbody>
                {driverStandings.slice(0, 10).map((st) => {
                  const teamColor = getTeamColor(st.Constructors[0]?.constructorId);
                  return (
                    <tr key={st.position} className={st.position === '1' ? 'leader-row' : ''}>
                      <td className="font-bold">{st.position}</td>
                      <td>{st.position === '1' ? '👑 ' : ''}{st.Driver.givenName} <strong>{st.Driver.familyName}</strong></td>
                      <td style={{ color: teamColor, fontWeight: 500 }}>{st.Constructors[0]?.name}</td>
                      <td className="text-right font-bold" style={{ color: teamColor }}>{st.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <a href={`/${activeCategory}/pilotos`} style={{ display: 'block', padding: '1rem', textAlign: 'center', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px', color: 'var(--category-main-color)', borderTop: '1px solid var(--border-color)' }}>Ver tabla completa</a>
          </div>

          {/* Tabla de Equipos */}
          <div style={{ flex: '1 1 340px' }} className="card animate-in animate-delay-2">
            <div style={{ padding: '1rem 1.25rem', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid var(--border-color)' }}>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Campeonato de Equipos</h2>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Equipo</th>
                  <th className="text-right">Pts</th>
                </tr>
              </thead>
              <tbody>
                {constructorStandings.map((st) => {
                  const teamColor = getTeamColor(st.Constructor.constructorId);
                  return (
                    <tr key={st.position} className={st.position === '1' ? 'leader-row' : ''}>
                      <td className="font-bold">{st.position}</td>
                      <td className="font-bold" style={{ color: teamColor }}>{st.Constructor.name}</td>
                      <td className="text-right font-bold" style={{ color: teamColor }}>{st.points}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Próximas Carreras */}
          <div style={{ flex: '1 1 340px' }} className="card animate-in animate-delay-3">
            <div style={{ padding: '1rem 1.25rem', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid var(--border-color)' }}>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Calendario</h2>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Ronda</th>
                  <th>Evento</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {schedule.slice(0, 8).map((race) => {
                  const raceDate = new Date(race.date);
                  return (
                    <tr key={race.round}>
                      <td className="font-bold">{race.round}</td>
                      <td>{race.raceName}</td>
                      <td style={{ color: 'var(--text-secondary)' }}>{raceDate.toLocaleDateString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getLastRaceResults, getLastQualifying, getLastSprint } from '../services/api';
import { getPracticeResults } from '../data/practiceResults';
import { getTeamColor } from '../data/teamInfo';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useCategory } from '../context/CategoryContext';

export default function Results() {
  const { activeCategory, CATEGORIES } = useCategory();
  const [activeTab, setActiveTab] = useState('Race');
  const [data, setData] = useState({
    race: null,
    qualy: null,
    sprint: null,
    practices: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      setLoading(true);
      const [raceRes, qualyRes, sprintRes] = await Promise.all([
        getLastRaceResults(activeCategory),
        getLastQualifying(activeCategory),
        getLastSprint(activeCategory)
      ]);
      
      // Solo cargar prácticas para F1 por ahora
      const practiceRes = activeCategory === 'f1' ? getPracticeResults() : null;

      setData({
        race: raceRes,
        qualy: qualyRes,
        sprint: sprintRes,
        practices: practiceRes
      });
      setLoading(false);
    }
    fetchResults();
  }, [activeCategory]);

  if (loading) return <LoadingSkeleton variant="table" />;

  const currentCatData = CATEGORIES[activeCategory] || CATEGORIES.f1;
  const isF1 = activeCategory === 'f1';

  if (!isF1 && !data.race && !data.qualy) {
    return (
      <div className="container page-enter" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{currentCatData.icon}</div>
        <h1 style={{ color: 'var(--category-main-color)', marginBottom: '1rem' }}>Resultados de {currentCatData.name}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          El módulo de resultados históricos y en vivo para esta categoría está en desarrollo. ¡Próximamente!
        </p>
      </div>
    );
  }

  // Pestañas disponibles dinámicamente según si hay sprint o no y si existen prácticas
  const tabs = [];
  
  if (data.practices?.sessions?.FP1 && data.practices.sessions.FP1.length > 0) tabs.push('FP1');
  if (data.practices?.sessions?.FP2 && data.practices.sessions.FP2.length > 0) tabs.push('FP2');
  if (data.practices?.sessions?.FP3 && data.practices.sessions.FP3.length > 0) tabs.push('FP3');
  
  // Agregar Qualy Sprint si existe en nuestros datos de prácticas/FastF1
  if (data.practices?.sessions?.SQ && data.practices.sessions.SQ.length > 0) tabs.push('Sprint Qualy');
  
  if (data.qualy) tabs.push('Qualy');
  
  if (data.sprint) tabs.push('Sprint');
  
  if (data.race) tabs.push('Race');

  // Si activeTab no está en tabs (porque cambiamos de categoría), seleccionar la última
  const currentTab = tabs.includes(activeTab) ? activeTab : (tabs[tabs.length - 1] || 'Race');

  const getSessionData = () => {
    switch (currentTab) {
      case 'Race': return { title: 'Resultados de Carrera', results: data.race?.Results || [] };
      case 'Qualy': return { title: 'Clasificación', results: data.qualy?.QualifyingResults || [] };
      case 'Sprint': return { title: 'Resultados Sprint', results: data.sprint?.SprintResults || [] };
      case 'Sprint Qualy': return { title: 'Clasificación Sprint', results: data.practices?.sessions?.SQ || [] };
      case 'FP1': return { title: 'Práctica Libre 1', results: data.practices?.sessions?.FP1 || [] };
      case 'FP2': return { title: 'Práctica Libre 2', results: data.practices?.sessions?.FP2 || [] };
      case 'FP3': return { title: 'Práctica Libre 3', results: data.practices?.sessions?.FP3 || [] };
      default: return { title: '', results: [] };
    }
  };

  const currentSession = getSessionData();

  return (
    <div className="page-enter">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          {data.race ? `${data.race.raceName} - Resultados` : 'Resultados de Gran Premio'}
        </h1>
        {data.race && <p style={{ color: 'var(--text-secondary)' }}>Ronda {data.race.round} • Temporada {data.race.season}</p>}
      </div>

      {/* Tabs */}
      {tabs.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: 'var(--radius-pill)',
                border: currentTab === tab ? `1px solid var(--category-main-color)` : '1px solid var(--border-color)',
                background: currentTab === tab ? `linear-gradient(to right, var(--category-main-color)15, transparent)` : 'var(--bg-surface)',
                color: currentTab === tab ? 'var(--category-main-color)' : 'var(--text-secondary)',
                fontWeight: currentTab === tab ? '700' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s var(--ease-out)',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.85rem'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Resultados Table */}
      <div className="glass" style={{ padding: '0', overflowX: 'auto' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.4)' }}>
          <h2 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>{currentSession.title}</h2>
        </div>

        {currentSession.results.length === 0 ? (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No hay datos cargados para esta sesión aún.
            {(currentTab.includes('FP')) && (
              <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                (Los tiempos de prácticas se cargan manualmente)
              </p>
            )}
          </div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '60px', textAlign: 'center' }}>Pos</th>
                <th>Piloto</th>
                <th>Equipo</th>
                {currentTab === 'Qualy' || currentTab === 'Sprint Qualy' ? (
                  <>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                  </>
                ) : (
                  <>
                    <th>Tiempo / Gap</th>
                    <th>Vueltas</th>
                    <th>Puntos</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {currentSession.results.map((res, index) => {
                const driver = res.Driver || { givenName: res.driverName?.split(' ')[0] || '', familyName: res.driverName?.split(' ').slice(1).join(' ') || '' };
                const team = res.Constructor || { constructorId: res.teamId, name: res.teamName };
                const teamColor = getTeamColor(team.constructorId);
                const pos = res.position;

                return (
                  <tr key={index} className={pos === '1' ? 'leader-row' : ''}>
                    <td style={{ textAlign: 'center', fontWeight: 'bold', color: pos === '1' ? 'var(--accent-gold)' : 'var(--text-primary)' }}>
                      {pos}
                    </td>
                    <td>
                      <div style={{ borderLeft: `3px solid ${teamColor}`, paddingLeft: '0.75rem', fontWeight: 600 }}>
                        {pos === '1' && <span style={{ marginRight: '0.5rem' }}>👑</span>}
                        {driver.givenName} <span style={{ textTransform: 'uppercase' }}>{driver.familyName}</span>
                      </div>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{team.name}</td>
                    
                    {currentTab === 'Qualy' || currentTab === 'Sprint Qualy' ? (
                      <>
                        <td style={{ fontFamily: 'monospace' }}>{res.Q1 || '-'}</td>
                        <td style={{ fontFamily: 'monospace' }}>{res.Q2 || '-'}</td>
                        <td style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--category-main-color)' }}>{res.Q3 || '-'}</td>
                      </>
                    ) : (
                      <>
                        <td style={{ fontFamily: 'monospace', fontWeight: pos === '1' ? 'bold' : 'normal', color: pos === '1' ? 'var(--category-main-color)' : 'var(--text-primary)' }}>
                          {res.Time ? res.Time.time : (res.status !== 'Finished' && !res.status?.includes('+') ? res.status : res.time || res.gap || '-')}
                        </td>
                        <td>{res.laps || res.laps}</td>
                        <td style={{ fontWeight: 'bold', color: parseInt(res.points) > 0 ? 'var(--accent-gold)' : 'var(--text-secondary)' }}>
                          {res.points || (res.points !== undefined ? '0' : '-')}
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

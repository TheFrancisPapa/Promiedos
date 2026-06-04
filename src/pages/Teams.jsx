import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConstructorStandings } from '../services/api';
import { getTeamColor, getTeamLogo, getTeamCar } from '../data/teamInfo';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useCategory } from '../context/CategoryContext';

export default function Teams() {
  const { activeCategory, CATEGORIES } = useCategory();
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeams() {
      setLoading(true);
      const data = await getConstructorStandings(activeCategory);
      setStandings(data || []);
      setLoading(false);
    }
    fetchTeams();
  }, [activeCategory]);

  if (loading) return <LoadingSkeleton variant="cards" />;

  const currentCatData = CATEGORIES[activeCategory] || CATEGORIES.f1;
  const isF1 = activeCategory === 'f1';

  if (!isF1 && standings.length === 0) {
    return (
      <div className="container page-enter" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{currentCatData.icon}</div>
        <h1 style={{ color: 'var(--category-main-color)', marginBottom: '1rem' }}>Equipos de {currentCatData.name}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          La información de los equipos que compiten en este campeonato estará disponible muy pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <h1>Equipos del Campeonato</h1>
      <div className="card-grid card-grid-2">
        {standings.map((st, index) => {
          const teamColor = getTeamColor(st.Constructor.constructorId);
          return (
            <Link to={`/${activeCategory}/escuderias/${st.Constructor.constructorId}`} key={st.Constructor.constructorId} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ height: '100%', padding: '1.5rem', borderTop: `3px solid ${teamColor}`, display: 'flex', flexDirection: 'column', background: `linear-gradient(180deg, ${teamColor}08 0%, var(--bg-surface) 30%)`, animation: 'fadeInUp 0.5s var(--ease-out) both', animationDelay: `${index * 0.05}s` }}>
                <div className="flex justify-between items-start" style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    <div className="flex items-center gap-4" style={{ flex: 1, paddingRight: '1rem' }}>
                        <img 
                          src={getTeamLogo(st.Constructor.constructorId)} 
                          alt={st.Constructor.name} 
                          style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '8px', backgroundColor: 'var(--bg-surface)' }}
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <div>
                            <h2 style={{ margin: 0, color: teamColor, fontSize: '1.4rem', lineHeight: '1.2', marginBottom: '4px' }}>{st.Constructor.name}</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>Nacionalidad: {st.Constructor.nationality}</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'var(--bg-surface-hover)', padding: '0.75rem 1rem', borderRadius: '8px', textAlign: 'center', minWidth: '80px' }}>
                        <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Posición</span>
                        <span className="font-bold" style={{ fontSize: '2rem', color: teamColor, lineHeight: 1 }}>{st.position}</span>
                    </div>
                </div>

                <div style={{ margin: '0.5rem 0 1.5rem 0', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
                   <img 
                      src={getTeamCar(st.Constructor.constructorId)} 
                      alt={`Coche de ${st.Constructor.name}`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }}
                      onError={(e) => { 
                        e.target.style.display = 'none'; 
                        e.target.nextSibling.style.display = 'flex'; 
                      }}
                   />
                   <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'none', width: '100%', height: '100%', backgroundColor: 'var(--bg-surface-hover)', borderRadius: '8px', alignItems: 'center', justifyContent: 'center' }}>Sin imagen del auto</div>
                </div>
                
                <div className="flex justify-between" style={{ paddingTop: '0.5rem', marginTop: 'auto' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Puntos Totales</span>
                        <span className="font-bold" style={{ fontSize: '1.5rem' }}>{st.points}</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Victorias</span>
                        <span className="font-bold" style={{ fontSize: '1.5rem' }}>{st.wins}</span>
                    </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

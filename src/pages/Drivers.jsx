import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDriverStandings } from '../services/api';
import { getTeamColor, getTeamLogo, getDriverProfiles } from '../data/teamInfo';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useCategory } from '../context/CategoryContext';

const DriverAvatar = ({ driverId, givenName, familyName, teamColor }) => {
  const profiles = getDriverProfiles(driverId);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (profiles.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [profiles.length]);

  return (
    <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--bg-surface-hover)', border: `4px solid ${teamColor}`, marginBottom: '1rem', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: `0 0 20px ${teamColor}20` }}>
      {profiles.map((profile, index) => (
        <img 
          key={profile}
          src={profile} 
          alt={`${givenName} ${familyName}`} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
          onError={(e) => { 
            e.target.style.display = 'none'; 
            if (index === currentIndex && e.target.parentElement) {
                e.target.parentElement.lastChild.style.display = 'flex';
            }
          }}
        />
      ))}
      <span style={{ fontSize: '3rem', color: 'var(--text-secondary)', display: profiles.length === 0 ? 'flex' : 'none', position: 'relative', zIndex: -1 }}>
        {givenName.charAt(0)}{familyName.charAt(0)}
      </span>
    </div>
  );
};

export default function Drivers() {
  const { activeCategory, CATEGORIES } = useCategory();
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDrivers() {
      setLoading(true);
      const data = await getDriverStandings(activeCategory);
      setStandings(data || []);
      setLoading(false);
    }
    fetchDrivers();
  }, [activeCategory]);

  if (loading) return <LoadingSkeleton variant="cards" />;

  const currentCatData = CATEGORIES[activeCategory] || CATEGORIES.f1;
  const isF1 = activeCategory === 'f1';

  if (!isF1 && standings.length === 0) {
    return (
      <div className="container page-enter" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{currentCatData.icon}</div>
        <h1 style={{ color: 'var(--category-main-color)', marginBottom: '1rem' }}>Pilotos de {currentCatData.name}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          La lista oficial de pilotos de esta categoría estará disponible próximamente.
        </p>
      </div>
    );
  }

  const getBadgeClass = (pos) => {
    if (pos === '1') return 'position-badge gold';
    if (pos === '2') return 'position-badge silver';
    if (pos === '3') return 'position-badge bronze';
    return 'position-badge';
  };

  return (
    <div className="page-enter">
      <h1>Pilotos de la Parrilla</h1>
      <div className="card-grid card-grid-3">
        {standings.map((st, index) => {
          const teamId = st.Constructors[0]?.constructorId;
          const teamColor = getTeamColor(teamId);
          return (
            <Link to={`/${activeCategory}/pilotos/${st.Driver.driverId}`} key={st.Driver.driverId} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ height: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: `3px solid ${teamColor}`, background: `linear-gradient(180deg, ${teamColor}08 0%, var(--bg-surface) 30%)`, animation: 'fadeInUp 0.5s var(--ease-out) both', animationDelay: `${index * 0.05}s` }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <span className={getBadgeClass(st.position)}>{st.position}</span>
                </div>
                <DriverAvatar 
                  driverId={st.Driver.driverId} 
                  givenName={st.Driver.givenName} 
                  familyName={st.Driver.familyName} 
                  teamColor={teamColor} 
                />
                <h2 style={{ margin: 0, textAlign: 'center', fontSize: '1.2rem' }}>{st.Driver.givenName} {st.Driver.familyName}</h2>
                <div className="flex items-center gap-2" style={{ marginBottom: '1rem' }}>
                    <img src={getTeamLogo(teamId)} alt="logo" style={{ width: '20px', height: '20px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
                    <p style={{ color: teamColor, fontWeight: 600, fontSize: '0.9rem' }}>{st.Constructors[0]?.name}</p>
                </div>
                
                <div className="flex justify-between" style={{ width: '100%', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <div className="text-center">
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Posición</span>
                    <span className="font-bold" style={{ fontSize: '1.5rem' }}>{st.position}</span>
                  </div>
                  <div className="text-center">
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Puntos</span>
                    <span className="font-bold" style={{ fontSize: '1.5rem', color: teamColor }}>{st.points}</span>
                  </div>
                  <div className="text-center">
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Victorias</span>
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

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCircuits } from '../services/api';
import imageMap from '../data/imageMap.json';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useCategory } from '../context/CategoryContext';

const getCircuitImage = (circuitId) => {
  const id = circuitId?.toLowerCase();
  return imageMap.circuits && imageMap.circuits[id] ? imageMap.circuits[id] : null;
};

export default function Circuits() {
  const { activeCategory, CATEGORIES } = useCategory();
  const [circuits, setCircuits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCircuits() {
      setLoading(true);
      const data = await getCircuits(activeCategory);
      setCircuits(data || []);
      setLoading(false);
    }
    fetchCircuits();
  }, [activeCategory]);

  if (loading) return <LoadingSkeleton variant="cards" />;

  const currentCatData = CATEGORIES[activeCategory] || CATEGORIES.f1;
  const isF1 = activeCategory === 'f1';

  if (!isF1 && circuits.length === 0) {
    return (
      <div className="container page-enter" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{currentCatData.icon}</div>
        <h1 style={{ color: 'var(--category-main-color)', marginBottom: '1rem' }}>Circuitos de {currentCatData.name}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          La lista de circuitos para esta categoría estará disponible próximamente.
        </p>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <h1>Circuitos de la Temporada</h1>
      <div className="card-grid card-grid-3">
        {circuits.map((c, index) => {
          const imgUrl = getCircuitImage(c.circuitId);
          return (
            <Link to={`/${activeCategory}/circuitos/${c.circuitId}`} key={c.circuitId} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ height: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', animation: 'fadeInUp 0.5s var(--ease-out) both', animationDelay: `${index * 0.05}s` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h2 style={{ margin: 0, color: 'var(--f1-red)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{c.circuitName}</h2>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{c.Location.locality}, {c.Location.country}</p>
                  </div>
                </div>
                
                <div style={{ flex: 1, backgroundColor: 'var(--bg-surface-hover)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '180px', padding: '1rem', overflow: 'hidden' }}>
                  {imgUrl ? (
                    <img src={imgUrl} alt={c.circuitName} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }} />
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center' }}>Sube <b>{c.circuitId}.jpg</b><br/>a la carpeta de circuitos</span>
                  )}
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--f1-red)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Ver detalles
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

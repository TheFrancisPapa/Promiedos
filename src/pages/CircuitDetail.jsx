import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRaceSchedule } from '../services/api';
import { getCircuitBio } from '../data/circuitBios';
import imageMap from '../data/imageMap.json';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { ArrowLeft } from 'lucide-react';
import { useCategory } from '../context/CategoryContext';

export default function CircuitDetail() {
  const { id } = useParams();
  const { activeCategory } = useCategory();
  const [circuitData, setCircuitData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const races = await getRaceSchedule(activeCategory);
      const race = races ? races.find(r => r.Circuit.circuitId === id) : null;
      setCircuitData(race);
      setLoading(false);
    }
    fetchData();
  }, [id, activeCategory]);

  if (loading) return <LoadingSkeleton variant="detail" />;

  const isF1 = activeCategory === 'f1';
  if (!isF1 || !circuitData) {
    return (
      <div className="container page-enter" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h1 style={{ color: 'var(--category-main-color)', marginBottom: '1rem' }}>Circuito no encontrado</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          {!isF1 ? 'Los perfiles detallados de circuitos para esta categoría estarán disponibles próximamente.' : 'No se encontró la información del circuito.'}
        </p>
        <Link to={`/${activeCategory}/circuitos`} style={{ display: 'inline-block', marginTop: '2rem', padding: '0.75rem 1.5rem', background: 'var(--bg-surface-hover)', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none' }}>
          Volver a la lista
        </Link>
      </div>
    );
  }

  const circuitBio = getCircuitBio(id);
  const circuitImages = imageMap.circuits && imageMap.circuits[id] ? imageMap.circuits[id] : [];
  const themeColor = '#1e3a8a';

  return (
    <div className="page-enter">
      <Link to={`/${activeCategory}/circuitos`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Volver a Circuitos
      </Link>

      <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="detail-header-glow" style={{ background: themeColor }} />
        
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: themeColor, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Ronda {circuitData.round} - {circuitData.date}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1, marginBottom: '0.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
              {circuitData.raceName}
            </h1>
            <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', lineHeight: 1, marginBottom: '2rem', color: themeColor, fontFamily: 'var(--font-heading)' }}>
              {circuitData.Circuit.circuitName}
            </h2>
            <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', whiteSpace: 'pre-wrap' }}>
              {circuitBio.description}
            </div>
            <div className="premium-quote" style={{ borderLeft: `4px solid ${themeColor}` }}>
              {circuitBio.quote}
            </div>
          </div>
          
          <div style={{ width: '400px', flex: '0 0 400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {Array.isArray(circuitImages) && circuitImages.length > 0 ? (
               circuitImages.map((imgUrl, idx) => (
                 <div key={idx} style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', border: '2px solid var(--border-color)', backgroundColor: 'white' }}>
                    <img src={imgUrl} alt={`Circuito ${idx + 1}`} style={{ width: '100%', objectFit: 'contain' }} />
                 </div>
               ))
             ) : (
               <div style={{ width: '100%', height: '300px', borderRadius: '16px', border: '2px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                  Sin imagen disponible
               </div>
             )}
          </div>
        </div>

        {/* Sección Inferior a Todo Ancho */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '1rem' }}>
            {circuitBio.technicalData && (
              <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: themeColor }}>⚗️</span> Laboratorio Técnico
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  <div style={{ background: 'var(--bg-surface-hover)', padding: '1.5rem', borderRadius: '12px', border: `1px solid ${themeColor}40` }}>
                     <div style={{ marginBottom: '1rem' }}>
                       <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Tipo de Trazado</span>
                       <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{circuitBio.technicalData.trackType}</span>
                     </div>
                     <div>
                       <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Enfoque de Reglaje (Setup)</span>
                       <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>{circuitBio.technicalData.setupFocus}</span>
                     </div>
                  </div>
                  {circuitBio.technicalData.educationalConcept && (
                    <div style={{ background: `linear-gradient(145deg, var(--bg-surface-hover) 0%, rgba(30, 58, 138, 0.1) 100%)`, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${themeColor}` }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                         <span className="concept-badge" style={{ backgroundColor: themeColor, color: 'white' }}>Concepto Clave</span>
                         <h4 style={{ fontSize: '1.3rem', margin: 0, color: themeColor, fontFamily: 'var(--font-heading)' }}>{circuitBio.technicalData.educationalConcept.title}</h4>
                       </div>
                       <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                         {circuitBio.technicalData.educationalConcept.explanation}
                       </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <div>
                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Ubicación</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{circuitData.Circuit.Location.locality}, {circuitData.Circuit.Location.country}</span>
              </div>
            </div>

            {circuitBio.wikipediaUrl && (
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <a href={circuitBio.wikipediaUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-primary)', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', border: `1px solid ${themeColor}`, transition: 'all 0.3s ease' }} onMouseOver={e => e.target.style.background = themeColor} onMouseOut={e => e.target.style.background = 'var(--bg-surface-hover)'}>
                  Leer más historia en Wikipedia
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

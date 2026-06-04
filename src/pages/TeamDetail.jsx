import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConstructorStandings } from '../services/api';
import { getTeamColor, getTeamLogo } from '../data/teamInfo';
import { getTeamBio } from '../data/teamBios';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { ArrowLeft } from 'lucide-react';
import { useCategory } from '../context/CategoryContext';

export default function TeamDetail() {
  const { id } = useParams();
  const { activeCategory } = useCategory();
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const standings = await getConstructorStandings(activeCategory);
      const team = standings ? standings.find(st => st.Constructor.constructorId === id) : null;
      setTeamData(team);
      setLoading(false);
    }
    fetchData();
  }, [id, activeCategory]);

  if (loading) return <LoadingSkeleton variant="detail" />;

  const isF1 = activeCategory === 'f1';
  if (!isF1 || !teamData) {
    return (
      <div className="container page-enter" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h1 style={{ color: 'var(--category-main-color)', marginBottom: '1rem' }}>Equipo no encontrado</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          {!isF1 ? 'Los perfiles detallados de equipos para esta categoría estarán disponibles próximamente.' : 'No se encontró la información del equipo.'}
        </p>
        <Link to={`/${activeCategory}/escuderias`} style={{ display: 'inline-block', marginTop: '2rem', padding: '0.75rem 1.5rem', background: 'var(--bg-surface-hover)', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none' }}>
          Volver a la lista
        </Link>
      </div>
    );
  }

  const teamBio = getTeamBio(id);
  const themeColor = getTeamColor(id);

  return (
    <div className="page-enter">
      <Link to={`/${activeCategory}/escuderias`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Volver a Equipos
      </Link>

      <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="detail-header-glow" style={{ background: themeColor }} />
        
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ color: themeColor, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{teamData.Constructor.nationality}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1, marginBottom: '2rem', color: themeColor, fontFamily: 'var(--font-heading)' }}>
              {teamData.Constructor.name}
            </h1>
            <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', whiteSpace: 'pre-wrap' }}>
              {teamBio.description}
            </div>
            <div className="premium-quote" style={{ borderLeft: `4px solid ${themeColor}` }}>
              {teamBio.quote}
            </div>
          </div>
          <div style={{ width: '300px', flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'flex-start' }}>
              <div style={{ backgroundColor: 'var(--bg-surface-hover)', borderRadius: '16px', padding: '2rem', display: 'flex', justifyContent: 'center', border: `1px solid ${themeColor}20` }}>
                  <img src={getTeamLogo(teamData.Constructor.constructorId)} alt="logo" style={{ width: '200px', height: '200px', objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
              </div>
          </div>
        </div>

        {/* Sección Inferior a Todo Ancho */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '1rem' }}>
            {teamBio.technicalData && (
              <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: themeColor }}>⚗️</span> Ingeniería y Desarrollo
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  <div style={{ background: 'var(--bg-surface-hover)', padding: '1.5rem', borderRadius: '12px', border: `1px solid ${themeColor}40` }}>
                     {teamBio.technicalData.designPhilosophy && (
                       <div>
                         <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Filosofía de Diseño</span>
                         <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>{teamBio.technicalData.designPhilosophy}</span>
                       </div>
                     )}
                  </div>
                  {teamBio.technicalData.educationalConcept && (
                    <div style={{ background: `linear-gradient(145deg, var(--bg-surface-hover) 0%, rgba(30, 58, 138, 0.1) 100%)`, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${themeColor}` }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                         <span className="concept-badge" style={{ backgroundColor: themeColor, color: 'white' }}>Hito Histórico</span>
                         <h4 style={{ fontSize: '1.3rem', margin: 0, color: themeColor, fontFamily: 'var(--font-heading)' }}>{teamBio.technicalData.educationalConcept.title}</h4>
                       </div>
                       <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                         {teamBio.technicalData.educationalConcept.explanation}
                       </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {teamBio.rivalries && teamBio.rivalries.length > 0 && (
              <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Rivalidad Histórica</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                  {teamBio.rivalries.map((rivalry, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-surface-hover)', padding: '1.5rem', borderRadius: '12px', border: `1px solid ${themeColor}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ flex: 1, textAlign: 'right', fontSize: '1.4rem', fontWeight: 'bold', color: themeColor, fontFamily: 'var(--font-heading)' }}>{teamData.Constructor.name}</div>
                        <div style={{ padding: '0 2rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-secondary)' }}>VS</div>
                        <div style={{ flex: 1, textAlign: 'left', fontSize: '1.4rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>{rivalry.rivalName}</div>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: themeColor, width: '40px', textAlign: 'right' }}>{rivalry.wins}</div>
                        <div style={{ flex: 1, height: '12px', borderRadius: '6px', display: 'flex', overflow: 'hidden' }}>
                           <div style={{ flex: rivalry.wins, background: themeColor }} />
                           <div style={{ flex: rivalry.losses, background: 'var(--text-secondary)', opacity: 0.5 }} />
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--text-secondary)', width: '40px', textAlign: 'left' }}>{rivalry.losses}</div>
                      </div>
                      
                      <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, textAlign: 'center' }}>
                        {rivalry.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {teamBio.wikipediaUrl && (
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <a href={teamBio.wikipediaUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-primary)', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', border: `1px solid ${themeColor}`, transition: 'all 0.3s ease' }} onMouseOver={e => e.target.style.background = themeColor} onMouseOut={e => e.target.style.background = 'var(--bg-surface-hover)'}>
                  Leer más historia en Wikipedia
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

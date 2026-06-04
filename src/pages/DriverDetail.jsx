import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDriverStandings } from '../services/api';
import { getTeamColor, getTeamLogo, getDriverProfiles } from '../data/teamInfo';
import { getDriverBio } from '../data/bios';
import StarRating from '../components/StarRating';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { ArrowLeft } from 'lucide-react';
import { useCategory } from '../context/CategoryContext';

export default function DriverDetail() {
  const { id } = useParams();
  const { activeCategory, CATEGORIES } = useCategory();
  const [driverData, setDriverData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const standings = await getDriverStandings(activeCategory);
      const driver = standings ? standings.find(st => st.Driver.driverId === id) : null;
      setDriverData(driver);
      setLoading(false);
    }
    fetchData();
  }, [id, activeCategory]);

  if (loading) return <LoadingSkeleton variant="detail" />;

  const isF1 = activeCategory === 'f1';
  if (!isF1 || !driverData) {
    return (
      <div className="container page-enter" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <h1 style={{ color: 'var(--category-main-color)', marginBottom: '1rem' }}>Piloto no encontrado</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          {!isF1 ? 'Los perfiles detallados para esta categoría estarán disponibles próximamente.' : 'No se encontró la información del piloto.'}
        </p>
        <Link to={`/${activeCategory}/pilotos`} style={{ display: 'inline-block', marginTop: '2rem', padding: '0.75rem 1.5rem', background: 'var(--bg-surface-hover)', borderRadius: '8px', color: 'var(--text-primary)', textDecoration: 'none' }}>
          Volver a la lista
        </Link>
      </div>
    );
  }

  const driverBio = getDriverBio(id);
  const driverProfiles = getDriverProfiles(id);
  const themeColor = getTeamColor(driverData.Constructors[0]?.constructorId);

  return (
    <div className="page-enter">
      <Link to={`/${activeCategory}/pilotos`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={20} /> Volver a Pilotos
      </Link>

      <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="detail-header-glow" style={{ background: themeColor }} />
        
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img src={getTeamLogo(driverData.Constructors[0]?.constructorId)} alt="logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
              <span style={{ color: themeColor, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{driverData.Constructors[0]?.name}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1, marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>
              {driverData.Driver.givenName} <br/>
              <span style={{ color: themeColor }}>{driverData.Driver.familyName}</span>
            </h1>
            
            <div style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', whiteSpace: 'pre-wrap' }}>
              {driverBio.description}
            </div>

            <div className="premium-quote" style={{ borderLeft: `4px solid ${themeColor}` }}>
              {driverBio.quote}
            </div>
          </div>
          
          <div style={{ width: '300px', flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', border: `4px solid ${themeColor}`, boxShadow: `0 8px 32px ${themeColor}20` }}>
                <img src={driverProfiles[0] || `/images/drivers/profiles/${driverData.Driver.driverId}.jpg`} alt="Perfil principal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display='none'}/>
             </div>
             {driverProfiles.length > 1 && (
               <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                  {driverProfiles.slice(1).map((p, i) => (
                    <img key={i} src={p} alt="Extra profile" style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover', border: '1px solid var(--border-color)' }} onError={e => e.target.style.display='none'} />
                  ))}
               </div>
             )}
          </div>
        </div>

        {/* Sección Inferior a Todo Ancho */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '1rem' }}>
            {driverBio.technicalData && (
              <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: themeColor }}>⚗️</span> Laboratorio Técnico y Táctico
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  <div style={{ background: 'var(--bg-surface-hover)', padding: '1.5rem', borderRadius: '12px', border: `1px solid ${themeColor}40` }}>
                     {driverBio.technicalData.drivingStyle && (
                       <div style={{ marginBottom: '1rem' }}>
                         <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Estilo de Pilotaje</span>
                         <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>{driverBio.technicalData.drivingStyle}</span>
                       </div>
                     )}
                     {driverBio.technicalData.notableStrategy && (
                       <div>
                         <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Sello Estratégico</span>
                         <span style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>{driverBio.technicalData.notableStrategy}</span>
                       </div>
                     )}
                  </div>
                  {driverBio.technicalData.educationalConcept && (
                    <div style={{ background: `linear-gradient(145deg, var(--bg-surface-hover) 0%, rgba(30, 58, 138, 0.1) 100%)`, padding: '1.5rem', borderRadius: '12px', border: `1px solid ${themeColor}` }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                         <span className="concept-badge" style={{ backgroundColor: themeColor, color: 'white' }}>Concepto Clave</span>
                         <h4 style={{ fontSize: '1.3rem', margin: 0, color: themeColor, fontFamily: 'var(--font-heading)' }}>{driverBio.technicalData.educationalConcept.title}</h4>
                       </div>
                       <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                         {driverBio.technicalData.educationalConcept.explanation}
                       </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {driverBio.stats && (
              <div style={{ padding: '1.5rem', background: 'var(--bg-surface-hover)', borderRadius: '12px', border: `1px solid ${themeColor}` }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Atributos de Pilotaje</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  <StarRating label="Experiencia" rating={driverBio.stats.experiencia} color={themeColor} />
                  <StarRating label="Ritmo a 1 Vuelta" rating={driverBio.stats.ritmoClasificacion} color={themeColor} />
                  <StarRating label="Ritmo de Carrera" rating={driverBio.stats.ritmoCarrera} color={themeColor} />
                  <StarRating label="Gestión Neumáticos" rating={driverBio.stats.gestionNeumaticos} color={themeColor} />
                  <StarRating label="Defensa / Agresividad" rating={driverBio.stats.defensaAgresividad} color={themeColor} />
                  <div style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', borderLeft: `4px solid ${themeColor}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Global</span>
                    <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: themeColor, lineHeight: 1, fontFamily: 'var(--font-heading)' }}>{driverBio.stats.calificacionGeneral}</span>
                  </div>
                </div>
              </div>
            )}

            {driverBio.rivalries && driverBio.rivalries.length > 0 && (
              <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Rivalidad Histórica</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                  {driverBio.rivalries.map((rivalry, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-surface-hover)', padding: '1.5rem', borderRadius: '12px', border: `1px solid ${themeColor}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ flex: 1, textAlign: 'right', fontSize: '1.4rem', fontWeight: 'bold', color: themeColor, fontFamily: 'var(--font-heading)' }}>{driverData.Driver.familyName}</div>
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
            
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <div>
                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Nacionalidad</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{driverData.Driver.nationality}</span>
              </div>
              <div>
                <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Nacimiento</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{driverData.Driver.dateOfBirth}</span>
              </div>
            </div>

            {driverBio.wikipediaUrl && (
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <a href={driverBio.wikipediaUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-primary)', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', border: `1px solid ${themeColor}`, transition: 'all 0.3s ease' }} onMouseOver={e => e.target.style.background = themeColor} onMouseOut={e => e.target.style.background = 'var(--bg-surface-hover)'}>
                  Leer biografía completa en Wikipedia
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

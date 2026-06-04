import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Flag, Users, CarFront, Map, Menu, X, Timer, ChevronDown } from 'lucide-react';
import { useCategory } from '../context/CategoryContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { activeCategory, CATEGORIES } = useCategory();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    const fullPath = `/${activeCategory}${path === '/' ? '' : path}`;
    if (path === '/') return location.pathname === `/${activeCategory}` || location.pathname === `/${activeCategory}/`;
    return location.pathname.startsWith(fullPath);
  };

  const closeMenu = () => setMenuOpen(false);

  const handleCategoryChange = (e) => {
    const newCat = e.target.value;
    // Navegar a la página principal de la nueva categoría
    navigate(`/${newCat}`);
    closeMenu();
  };

  const currentCatData = CATEGORIES[activeCategory] || CATEGORIES.f1;

  return (
    <>
      {/* Selector de Categoría Global (Top Bar) */}
      <div className="category-topbar" style={{ background: 'var(--bg-card)', padding: '0.5rem 2rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderBottom: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
        <span style={{ color: 'var(--text-secondary)', marginRight: '0.75rem', fontWeight: 600 }}>Categoría:</span>
        <div style={{ position: 'relative' }}>
          <select 
            value={activeCategory} 
            onChange={handleCategoryChange}
            style={{
              appearance: 'none',
              background: 'transparent',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              padding: '0.25rem 2rem 0.25rem 0.75rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-main)',
              fontWeight: 600,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {Object.values(CATEGORIES).map(cat => (
              <option key={cat.id} value={cat.id} style={{ background: 'var(--bg-body)' }}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
          <ChevronDown size={14} style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-secondary)' }} />
        </div>
      </div>

      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to={`/${activeCategory}`} className="navbar-logo" onClick={closeMenu}>
            <span style={{ marginRight: '0.5rem', fontSize: '1.5rem' }}>{currentCatData.icon}</span>
            <span className="navbar-logo-text">
              PROMIEDOS<span className="navbar-logo-accent" style={{ color: 'var(--category-main-color)' }}>{currentCatData.shortName}</span>
            </span>
          </Link>

          <nav className={`navbar-links${menuOpen ? ' open' : ''}`}>
            <Link to={`/${activeCategory}`} className={`nav-link${isActive('/') ? ' active' : ''}`} onClick={closeMenu}>
              <Flag size={18} /> Posiciones
            </Link>
            <Link to={`/${activeCategory}/pilotos`} className={`nav-link${isActive('/pilotos') ? ' active' : ''}`} onClick={closeMenu}>
              <Users size={18} /> Pilotos
            </Link>
            <Link to={`/${activeCategory}/escuderias`} className={`nav-link${isActive('/escuderias') ? ' active' : ''}`} onClick={closeMenu}>
              <CarFront size={18} /> Equipos
            </Link>
            <Link to={`/${activeCategory}/circuitos`} className={`nav-link${isActive('/circuitos') ? ' active' : ''}`} onClick={closeMenu}>
              <Map size={18} /> Circuitos
            </Link>
            <Link to={`/${activeCategory}/resultados`} className={`nav-link${isActive('/resultados') ? ' active' : ''}`} onClick={closeMenu}>
              <Timer size={18} /> Resultados
            </Link>
          </nav>

          <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
}

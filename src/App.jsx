import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Drivers from './pages/Drivers';
import Teams from './pages/Teams';
import Circuits from './pages/Circuits';
import DriverDetail from './pages/DriverDetail';
import TeamDetail from './pages/TeamDetail';
import CircuitDetail from './pages/CircuitDetail';
import Results from './pages/Results';
import { CategoryProvider, useCategory } from './context/CategoryContext';
import './App.css';

// Componente helper para sincronizar el contexto con la URL
function CategorySync({ children }) {
  const { category } = useParams();
  const { setActiveCategory } = useCategory();
  
  import('react').then(React => {
    React.useEffect(() => {
      if (category) {
        setActiveCategory(category);
      }
    }, [category, setActiveCategory]);
  });
  
  return children;
}

function App() {
  return (
    <CategoryProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem', minHeight: '80vh' }}>
            <Routes>
              {/* Redirección del root a F1 por defecto */}
              <Route path="/" element={<Navigate to="/f1" replace />} />
              
              <Route path="/:category" element={<CategorySync><Home /></CategorySync>} />
              <Route path="/:category/pilotos" element={<CategorySync><Drivers /></CategorySync>} />
              <Route path="/:category/pilotos/:id" element={<CategorySync><DriverDetail /></CategorySync>} />
              <Route path="/:category/escuderias" element={<CategorySync><Teams /></CategorySync>} />
              <Route path="/:category/escuderias/:id" element={<CategorySync><TeamDetail /></CategorySync>} />
              <Route path="/:category/circuitos" element={<CategorySync><Circuits /></CategorySync>} />
              <Route path="/:category/circuitos/:id" element={<CategorySync><CircuitDetail /></CategorySync>} />
              <Route path="/:category/resultados" element={<CategorySync><Results /></CategorySync>} />
            </Routes>
          </main>

          <footer className="app-footer">
            <div className="footer-inner">
              <div className="footer-col">
                <div className="navbar-logo">
                  <span className="navbar-logo-text">
                    PROMIEDOS<span className="navbar-logo-accent">MOTORSPORT</span>
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  Tu enciclopedia definitiva de automovilismo global. Posiciones, pilotos, escuderías y resultados en un solo lugar.
                </p>
              </div>

              <div className="footer-col">
                <h4>Navegación</h4>
                <ul className="footer-links">
                  <li><Link to="/f1">Fórmula 1</Link></li>
                  <li><Link to="/motogp">MotoGP</Link></li>
                  <li><Link to="/tc">Turismo Carretera</Link></li>
                  <li><Link to="/wrc">WRC</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Datos</h4>
                <ul className="footer-links">
                  <li><span>Multicategoría</span></li>
                  <li><span>Actualización en vivo</span></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© 2026 Promiedos Motorsport — Hecho con pasión</span>
              <span>Proyecto educativo no comercial</span>
            </div>
          </footer>
        </div>
      </Router>
    </CategoryProvider>
  );
}

export default App;

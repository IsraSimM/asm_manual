import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import MainContent from './components/MainContent';
import { ThemeProvider } from './ThemeContext';
import './styles/global.css';
import './styles/widgets.css';
import SiteClock from './components/SiteClock';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navId = 'primary-navigation';

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-shell">
          <SiteClock />
          <button
            type="button"
            className="menu-toggle"
            aria-controls={navId}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            Menu
          </button>
          <div
            className={`sidebar-overlay ${isMenuOpen ? 'sidebar-overlay--open' : ''}`}
            onClick={closeMenu}
            aria-hidden="true"
          />
          <Sidenav isOpen={isMenuOpen} onClose={closeMenu} navId={navId} />
          <MainContent />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

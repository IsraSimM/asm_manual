import { BrowserRouter } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import MainContent from './components/MainContent';
import { ThemeProvider } from './ThemeContext';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex">
          <Sidenav />
          <MainContent />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
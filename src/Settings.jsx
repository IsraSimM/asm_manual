import { useTheme } from './ThemeContext';

export default function Settings() {
  const { theme, toggleTheme, fontSize, setFontSizeOption, animationsEnabled, toggleAnimations } = useTheme();

  return (
    <div className="p-6">
      <h1
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
      >
        Configuración
      </h1>

      {/* Modo Claro/Oscuro */}
      <div className="mb-6">
        <h2
          className="text-xl font-semibold mb-2"
          style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
        >
          Tema
        </h2>
        <label className="flex items-center space-x-3">
          <span
            className="text-lg"
            style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
          >
            Modo {theme === 'light' ? 'Claro' : 'Oscuro'}
          </span>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className="w-6 h-6"
          />
        </label>
      </div>

      {/* Tamaño de Fuente */}
      <div className="mb-6">
        <h2
          className="text-xl font-semibold mb-2"
          style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
        >
          Tamaño de Fuente
        </h2>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="fontSize"
              value="small"
              checked={fontSize === 'small'}
              onChange={() => setFontSizeOption('small')}
              className="w-5 h-5"
            />
            <span
              className="text-lg"
              style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
            >
              Pequeño
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="fontSize"
              value="medium"
              checked={fontSize === 'medium'}
              onChange={() => setFontSizeOption('medium')}
              className="w-5 h-5"
            />
            <span
              className="text-lg"
              style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
            >
              Mediano
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="fontSize"
              value="large"
              checked={fontSize === 'large'}
              onChange={() => setFontSizeOption('large')}
              className="w-5 h-5"
            />
            <span
              className="text-lg"
              style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
            >
              Grande
            </span>
          </label>
        </div>
      </div>

      {/* Animaciones */}
      <div className="mb-6">
        <h2
          className="text-xl font-semibold mb-2"
          style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
        >
          Animaciones
        </h2>
        <label className="flex items-center space-x-3">
          <span
            className="text-lg"
            style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
          >
            {animationsEnabled ? 'Activar' : 'Desactivar'} Animaciones
          </span>
          <input
            type="checkbox"
            checked={animationsEnabled}
            onChange={toggleAnimations}
            className="w-6 h-6"
          />
        </label>
      </div>
    </div>
  );
}
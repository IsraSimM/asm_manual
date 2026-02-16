import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaTable,
  FaDesktop,
  FaUser,
  FaSignInAlt,
  FaPlus,
  FaCalculator,
  FaSyncAlt,
  FaListOl,
  FaChevronDown,
  FaChevronUp,
  FaCog,
  FaSquareRootAlt,
  FaShapes,
  FaExclamation,
  FaBalanceScale,
} from 'react-icons/fa';
import examplesData from '../data/examplesData';

// Mapa de íconos para usar dinámicamente
const iconMap = {
  FaUser,
  FaSignInAlt,
  FaPlus,
  FaSyncAlt,
  FaListOl,
  FaCalculator,
  FaSquareRootAlt,
  FaShapes,
  FaExclamation,
  FaBalanceScale,
};

export default function Sidenav({ isOpen, onClose, navId = 'primary-navigation' }) {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    const currentExample = examplesData.find((example) => example.id === currentPath);
    if (currentExample) {
      setOpenSection(currentExample.category);
    } else {
      setOpenSection(null);
    }
  }, [location]);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const nasmExamples = examplesData.filter((example) => example.category === 'nasm');
  const nasmGccExamples = examplesData.filter((example) => example.category === 'nasm-gcc');
  const handleNavigate = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      id={navId}
      className={`sidebar shadow-lg ${isOpen ? 'sidebar--open' : ''}`}
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      <div className="pt-6 px-7 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manual ASM</h2>
        <button
          type="button"
          className="menu-close"
          onClick={onClose}
          aria-label="Cerrar menu"
        >
          X
        </button>
      </div>
      <nav className="flex-1 mx-6 overflow-y-auto">
        <h6 className="mt-6 mx-4 text-xs uppercase font-bold opacity-60 mb-3">Pages</h6>
        <NavLink
          to="/"
          onClick={handleNavigate}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-md mb-4 transition duration-200 ${
              isActive ? 'bg-[var(--highlight-bg)] shadow-lg' : 'hover:bg-[var(--highlight-bg)] hover:shadow-lg'
            }`
          }
        >
          <div className="rounded-md w-8 h-8 flex items-center justify-center mr-4">
            <FaHome />
          </div>
          <span>Inicio</span>
        </NavLink>

        <h6 className="mt-6 px-4 text-xs uppercase font-bold opacity-60 mb-3">Requisitos</h6>
        <NavLink
          to="/nasm"
          onClick={handleNavigate}
          className={({ isActive }) =>
            `flex items-center py-3 px-6 mb-2 rounded-md transition duration-200 ${
              isActive ? 'bg-[var(--highlight-bg)] shadow-lg' : 'hover:bg-[var(--highlight-bg)] hover:shadow-lg'
            }`
          }
        >
          <div className="rounded-md w-8 h-8 flex items-center justify-center mr-4">
            <FaTable />
          </div>
          <span>Assembly - NASM</span>
        </NavLink>
        <NavLink
          to="/nasm-gcc"
          onClick={handleNavigate}
          className={({ isActive }) =>
            `flex items-center py-3 px-6 rounded-md mb-4 transition duration-200 ${
              isActive ? 'bg-[var(--highlight-bg)] shadow-lg' : 'hover:bg-[var(--highlight-bg)] hover:shadow-lg'
            }`
          }
        >
          <div className="rounded-md w-8 h-8 flex items-center justify-center mr-4">
            <FaDesktop />
          </div>
          <span>Assembly - NASM + GCC</span>
        </NavLink>

        <div>
          <h6
            className="mt-6 px-4 text-xs uppercase font-bold opacity-60 mb-3 cursor-pointer flex items-center"
            onClick={() => toggleSection('nasm')}
          >
            Ejemplos ASM
            {openSection === 'nasm' ? (
              <FaChevronUp className="ml-2 opacity-60" />
            ) : (
              <FaChevronDown className="ml-2 opacity-60" />
            )}
          </h6>
          {openSection === 'nasm' && (
            <div>
              {nasmExamples.map((example) => {
                const IconComponent = iconMap[example.icon];
                return (
                  <NavLink
                    key={example.id}
                    to={`/${example.id}`}
                    onClick={handleNavigate}
                    className={({ isActive }) =>
                      `flex items-center py-3 px-4 rounded-md mb-1 transition duration-200 ${
                        isActive ? 'bg-[var(--highlight-bg)] shadow-lg' : 'hover:bg-[var(--highlight-bg)] hover:shadow-lg'
                      }`
                    }
                  >
                    <div className="rounded-md w-8 h-8 flex items-center justify-center mr-4">
                      <IconComponent />
                    </div>
                    <span>{example.title}</span>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <h6
            className="mt-6 px-4 text-xs uppercase font-bold opacity-60 mb-3 cursor-pointer flex items-center"
            onClick={() => toggleSection('nasm-gcc')}
          >
            Ejemplos ASM + GCC
            {openSection === 'nasm-gcc' ? (
              <FaChevronUp className="ml-2 opacity-60" />
            ) : (
              <FaChevronDown className="ml-2 opacity-60" />
            )}
          </h6>
          {openSection === 'nasm-gcc' && (
            <div>
              {nasmGccExamples.map((example) => {
                const IconComponent = iconMap[example.icon];
                return (
                  <NavLink
                    key={example.id}
                    to={`/${example.id}`}
                    onClick={handleNavigate}
                    className={({ isActive }) =>
                      `flex items-center py-3 px-4 rounded-md mb-1 transition duration-200 ${
                        isActive ? 'bg-[var(--highlight-bg)] shadow-lg' : 'hover:bg-[var(--highlight-bg)] hover:shadow-lg'
                      }`
                    }
                  >
                    <div className="rounded-md w-8 h-8 flex items-center justify-center mr-4">
                      <IconComponent />
                    </div>
                    <span>{example.title}</span>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <div className="mt-auto mx-6 mb-6">
        <NavLink
          to="/about"
          onClick={handleNavigate}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-md transition duration-200 ${
              isActive ? 'bg-[var(--highlight-bg)] shadow-lg' : 'hover:bg-[var(--highlight-bg)] hover:shadow-lg'
            }`
          }
        >
          <div className="rounded-md w-8 h-8 flex items-center justify-center mr-4">
            <FaExclamation />
          </div>
          <span>About us</span>
        </NavLink>
        <NavLink
          to="/settings"
          onClick={handleNavigate}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-md transition duration-200 ${
              isActive ? 'bg-[var(--highlight-bg)] shadow-lg' : 'hover:bg-[var(--highlight-bg)] hover:shadow-lg'
            }`
          }
        >
          <div className="rounded-md w-8 h-8 flex items-center justify-center mr-4">
            <FaCog />
          </div>
          <span>Configuración</span>
        </NavLink>
      </div>
    </div>
  );
}

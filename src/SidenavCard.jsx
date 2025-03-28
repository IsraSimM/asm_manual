import { FaQuestionCircle } from 'react-icons/fa';

export default function SidenavCard({ 
  textPrimary = "Need help?", 
  textSecondary = "Please check our docs", 
  href = "#", 
  linkText = "Documentation", 
  iconClass = "text-indigo-900" 
}) {
  return (
    <div className="shadow-lg bg-[#E5F2EF] rounded-lg p-5 relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Fondo curvo simulado */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-indigo-300 opacity-40 rounded-lg" />

      {/* Contenido */}
      <div className="relative z-10">
        {/* Icono */}
        <div className="mb-4 mx-auto bg-[#A3E4D7] shadow-md rounded-full w-12 h-12 flex items-center justify-center transition-transform transform hover:scale-110">
          <FaQuestionCircle className={`text-xl ${iconClass} transition-transform transform hover:rotate-12`} />
        </div>

        {/* Texto y botón */}
        <div className="text-center">
          <h6 className="mb-2 text-xl font-semibold text-indigo-900">{textPrimary}</h6>
          <p className="text-sm font-semibold text-indigo-900 opacity-75">{textSecondary}</p>
          <a
            href={href}
            target="_blank"
            className="mt-4 block w-full bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-200 transform hover:scale-105"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}

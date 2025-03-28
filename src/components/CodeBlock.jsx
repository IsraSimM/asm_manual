import { useState, useRef } from 'react';
import { FaCopy, FaCompress, FaExpand, FaArrowsAltH } from 'react-icons/fa';

// Función para normalizar el código eliminando sangrías inconsistentes
const normalizeCode = (code) => {
  // Dividir el código en líneas
  const lines = code.split('\n');
  
  // Encontrar la sangría mínima (ignorando líneas vacías)
  let minIndent = Infinity;
  for (const line of lines) {
    if (line.trim() === '') continue; // Ignorar líneas vacías
    const indent = line.match(/^\s*/)[0].length; // Contar espacios iniciales
    minIndent = Math.min(minIndent, indent);
  }

  // Si no hay sangría mínima (por ejemplo, todas las líneas están vacías), usar 0
  if (minIndent === Infinity) minIndent = 0;

  // Eliminar la sangría mínima de todas las líneas
  const normalizedLines = lines.map((line) => {
    if (line.trim() === '') return line; // Mantener líneas vacías sin cambios
    return line.slice(minIndent);
  });

  // Unir las líneas de nuevo
  return normalizedLines.join('\n');
};

export default function CodeBlock({ code, filename, children, hideControls = false }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isWrapped, setIsWrapped] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = () => {
    const code = codeRef.current.innerText;
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Resetea el estado después de 2 segundos
    });
  };

  // Usar `code` si está definido, de lo contrario usar `children`
  const rawContent = code || children;

  // Normalizar el código para eliminar sangrías inconsistentes - No lo quiten, queda raro :(
  const content = normalizeCode(rawContent);

  return (
    <div className="codeblock-container relative shadow-md mb-4">
      {/* Encabezado con nombre del archivo y botones de control (si no están ocultos) */}
      <div className="codeblock-header flex justify-between items-center p-3 border-b border-gray-700">
        {/* Nombre del archivo en la esquina izquierda */}
        {filename && (
          <span
            className="text-[#99a7b3] text-sm italic"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            {filename}
          </span>
        )}
        {/* Botones de control en la esquina derecha (si no están ocultos) */}
        {!hideControls && (
          <div className="flex items-center">
            <button
              onClick={() => setIsWrapped(!isWrapped)}
              className="text-[#99a7b3] hover:text-white transition duration-200 mr-3"
              title={isWrapped ? "Unwrap text" : "Wrap text"}
            >
              <FaArrowsAltH className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-[#99a7b3] hover:text-white transition duration-200 mr-3"
              title={isCollapsed ? "Expand code" : "Collapse code"}
            >
              {isCollapsed ? <FaExpand className="w-4 h-4" /> : <FaCompress className="w-4 h-4" />}
            </button>
            <button
              onClick={handleCopy}
              className="text-[#99a7b3] hover:text-white transition duration-200"
              title={isCopied ? "Copied!" : "Copy code"}
            >
              <FaCopy className="w-4 h-4" />
              {isCopied && (
                <span className="absolute right-2 top-8 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Contenido del código */}
      <pre
        ref={codeRef}
        className={`p-4 text-sm ${isWrapped ? 'whitespace-pre-wrap' : 'whitespace-pre'} ${isCollapsed && !hideControls ? 'hidden' : 'block'} codeblock-content`}
        style={{ fontFamily: "'Fira Code', monospace" }}
      >
        <code>{content}</code>
      </pre>
      {isCollapsed && !hideControls && (
        <div className="p-4 text-[#99a7b3] text-sm italic codeblock-content">
          Code collapsed. Click the expand button to view.
        </div>
      )}
    </div>
  );
}
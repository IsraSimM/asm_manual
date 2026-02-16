import { Link } from 'react-router-dom';
import { FaBook, FaFolder, FaCode, FaInfoCircle, FaUser, FaSignInAlt, FaPlus, FaSyncAlt, FaListOl, FaCalculator, FaSquareRootAlt, FaShapes, FaExclamation, FaBalanceScale } from 'react-icons/fa';
import examplesData from './data/examplesData';
import WidgetsPanel from './components/WidgetsPanel';

// Mapa de íconos para cada proyecto basado en su ID - Lo que mas se relacionaba :)
const iconMap = {
  "hello-world": <FaUser className="text-2xl" />,
  "print-numbers": <FaSignInAlt className="text-2xl" />,
  "sum-ascii": <FaPlus className="text-2xl" />,
  "cycles": <FaSyncAlt className="text-2xl" />,
  "sum-cycle": <FaListOl className="text-2xl" />,
  "calculator": <FaCalculator className="text-2xl" />,
  "sum-gcc": <FaPlus className="text-2xl" />,
  "square-root-gcc": <FaSquareRootAlt className="text-2xl" />,
  "pyramid-gcc": <FaShapes className="text-2xl" />,
  "factorial-gcc": <FaExclamation className="text-2xl" />,
  "even-odd-gcc": <FaBalanceScale className="text-2xl" />,
  "read-value-gcc": <FaSignInAlt className="text-2xl" />,
  "calculator-gcc": <FaCalculator className="text-2xl" />,
};

// Mapa de esfuerzos estimados (en horas) para cada proyecto
const effortMap = {
  "hello-world": "3 horas",
  "print-numbers": "5 horas",
  "sum-ascii": "8 horas",
  "cycles": "6 horas",
  "sum-cycle": "7 horas",
  "calculator": "10 horas",
  "sum-gcc": "4 horas",
  "square-root-gcc": "5 horas",
  "pyramid-gcc": "6 horas",
  "factorial-gcc": "5 horas",
  "even-odd-gcc": "4 horas",
  "read-value-gcc": "4 horas",
  "calculator-gcc": "8 horas",
};

// Mapa de estados y completitud para cada proyecto - No sirve para nada, pero se ve bonito :0
const statusMap = {
  "hello-world": { status: "done", completion: 100 },
  "print-numbers": { status: "done", completion: 100 },
  "sum-ascii": { status: "done", completion: 100 },
  "cycles": { status: "done", completion: 100 },
  "sum-cycle": { status: "done", completion: 100 },
  "calculator": { status: "done", completion: 100 },
  "sum-gcc": { status: "done", completion: 100 },
  "square-root-gcc": { status: "done", completion: 100 },
  "pyramid-gcc": { status: "done", completion: 100 },
  "factorial-gcc": { status: "done", completion: 100 },
  "even-odd-gcc": { status: "done", completion: 100 },
  "read-value-gcc": { status: "done", completion: 100 },
  "calculator-gcc": { status: "done", completion: 100 },
};

export default function Dashboard() {
  // Generar la lista de proyectos a partir de examplesData - Esta muy chido el metodo 
  const projects = examplesData.map((example) => ({
    name: example.title,
    icon: iconMap[example.id] || <FaCode className="text-2xl" />, // Ícono por defecto si no se encuentra
    effort: effortMap[example.id] || "5 horas", // Esfuerzo por defecto si no se encuentra
    status: statusMap[example.id]?.status || "working", // Estado por defecto si no se encuentra
    completion: statusMap[example.id]?.completion || 50, // Completitud por defecto si no se encuentra
    link: `/${example.id}`, // Enlace basado en el ID del ejemplo
  }));

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Bienvenido al Manual de Ensamblador
      </h1>
      <p className="text-xl opacity-80 mb-8" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Explora las secciones del menú para aprender sobre NASM y ver ejemplos prácticos. Este manual está diseñado para ayudarte a dominar los fundamentos del ensamblador de manera sencilla y práctica.
      </p>

      {/* Tarjeta principal: ¿Assembly? */}
      <div className="grid grid-cols-1 mb-8 gap-6">
        <div className="widget-surface">
          <div className="flex">
            <div className="flex items-center justify-center h-14 rounded-full px-4 mr-4 shadow-lg" style={{ background: "linear-gradient(310deg, #7928CA 0%, #FF0080 100%)" }}>
              <FaBook className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                ¿Qué es Assembly?
              </h3>
              <p className="opacity-80 mt-1 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Assembly es un lenguaje de bajo nivel que permite interactuar directamente con el hardware. Se compone de instrucciones que se traducen a código máquina, proporcionando un control preciso sobre la CPU y la memoria.
              </p>
              <p className="opacity-80 mt-2 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                A diferencia de los lenguajes de alto nivel como C o Python, Assembly está diseñado para ejecutarse con eficiencia extrema, lo que lo hace ideal para sistemas embebidos, desarrollo de controladores, programación de hardware y optimización de software crítico.
              </p>
              <p className="opacity-80 mt-2 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Cada arquitectura de procesador tiene su propio conjunto de instrucciones en Assembly, como x86, ARM y MIPS. Por ejemplo, en la arquitectura x86, una instrucción típica podría ser <code className="text-indigo-700 font-mono" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>MOV AX, 5</code>, que carga el valor 5 en el registro AX.
              </p>
              <p className="opacity-80 mt-2 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                A pesar de su complejidad, aprender Assembly es fundamental para comprender cómo funcionan los programas a nivel más profundo. Es una herramienta poderosa en el desarrollo de software de bajo nivel, seguridad informática y optimización de rendimiento.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas secundarias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Requisitos */}
        <div className="widget-surface">
          <div className="flex">
            <div className="flex items-center justify-center h-14 rounded-full px-4 mr-4 shadow-lg" style={{ background: "linear-gradient(310deg, #ea0606 0%, #ff667c 100%)" }}>
              <FaFolder className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Requisitos
              </h3>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Descubre qué necesitas para empezar a programar en ensamblador con NASM. Desde herramientas hasta configuraciones básicas, aquí tienes todo lo necesario.
              </p>
              <Link
                to="/nasm"
                className="inline-block text-sm font-semibold rounded hover:transition duration-200"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
              >
                <p className="mt-2 hover:underline transition duration-200">
                  Ir a la sección
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Ejemplos */}
        <div className="widget-surface">
          <div className="flex">
            <div className="flex items-center justify-center h-14 rounded-full px-4 mr-4 shadow-lg" style={{ background: "linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)" }}>
              <FaCode className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Ejemplos
              </h3>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Explora ejemplos prácticos de código ASM listos para probar. Desde un simple "Hola Mundo" hasta operaciones más avanzadas con ASCII.
              </p>
              <Link
                to="/hello-world"
                className="inline-block text-sm font-semibold rounded hover:transition duration-200"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
              >
                <p className="mt-2 hover:underline transition duration-200">
                  Ir a la sección
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Acerca de */}
        <div className="widget-surface">
          <div className="flex">
            <div className="flex items-center justify-center h-14 rounded-full px-4 mr-4 shadow-lg" style={{ background: "linear-gradient(310deg, #f53939 0%, #fbcf33 100%)" }}>
              <FaInfoCircle className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Acerca de
              </h3>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Conoce más sobre este manual, su propósito y cómo puede ayudarte a aprender ensamblador de manera efectiva.
              </p>
              <Link
                to="/about"
                className="inline-block text-sm font-semibold rounded hover:transition duration-200"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
              >
                <p className="mt-2 hover:underline transition duration-200">
                  Ir a la sección
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta final: Proyectos más recientes - porcentaje de desarrollo actual y autor */}
      <div className="grid grid-cols-1 my-8 gap-6">
        <div className="widget-surface">
          <div className="mb-4">
            <h3 className="text-xl font-semibold" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              Proyectos del Manual
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-xs font-bold uppercase opacity-60 pb-2 px-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                    Proyecto
                  </th>
                  <th className="text-xs font-bold uppercase opacity-60 pb-2 px-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                    Esfuerzo Estimado
                  </th>
                  <th className="text-xs font-bold uppercase opacity-60 pb-2 px-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                    Estado
                  </th>
                  <th className="text-xs font-bold uppercase opacity-60 pb-2 px-4 text-center" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                    Completitud
                  </th>
                  <th className="text-xs font-bold uppercase opacity-60 pb-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="mr-3">{project.icon}</div>
                        <Link to={project.link}>
                          <h6 className="text-sm hover:underline" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                            {project.name}
                          </h6>
                        </Link>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                        {project.effort}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs font-semibold ${
                          project.status === "done"
                            ? "text-green-600"
                            : project.status === "working"
                            ? "text-blue-600"
                            : "text-red-600"
                        }`}
                        style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-xs mr-2" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                          {project.completion}%
                        </span>
                        <div className="w-24 h-2 bg-gray-200 rounded-full">
                          <div
                            className={`h-2 rounded-full ${
                              project.status === "done"
                                ? "bg-green-600"
                                : project.status === "working"
                                ? "bg-blue-600"
                                : "bg-red-600"
                            }`}
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

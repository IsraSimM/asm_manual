import { FaFolder, FaCode, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="p-6">
      <h1
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
      >
        Sobre Nosotros
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Nuestra Misión */}
        <div className="bg-[#f6faf91b] p-6 rounded-lg shadow-md hover:transition duration-200">
          <div className="flex">
            <div className="flex items-center justify-center h-14 rounded-full px-4 mr-4 shadow-lg" style={{ background: "linear-gradient(310deg, #ea0606 0%, #ff667c 100%)" }}>
              <FaFolder className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Nuestra Misión
              </h3>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Crear herramientas intuitivas y efectivas que ayuden a nuestros usuarios a mejorar su productividad y calidad de vida.
              </p>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Ademas de que queremos hacer lo que podemos para la escuelita.
              </p>
            </div>
          </div>
        </div>

        {/* Nuestro Equipo */}
        <div className="bg-[#f6faf91b] p-6 rounded-lg shadow-md hover:transition duration-200">
          <div className="flex">
            <div className="flex items-center justify-center h-14 rounded-full px-4 mr-4 shadow-lg" style={{ background: "linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)" }}>
              <FaCode className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Nuestro Equipo
              </h3>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Somos un grupo de apasionados por la tecnología, comprometidos en ofrecer soluciones innovadoras.
              </p>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Sin embargo en esta ocasion solo nos acompañó:
              </p>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Israel Simon Martinez
              </p>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                También puedes visitar mi perfil en <a href='https://github.com/IsraSimM' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>GitHub</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Contáctanos */}
        <div className="bg-[#f6faf91b] p-6 rounded-lg shadow-md hover:transition duration-200">
          <div className="flex">
            <div className="flex items-center justify-center h-14 rounded-full px-4 mr-4 shadow-lg" style={{ background: "linear-gradient(310deg, #f53939 0%, #fbcf33 100%)" }}>
              <FaInfoCircle className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Contáctanos
              </h3>
              <p className="opacity-80 mt-1" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                Si tienes preguntas o sugerencias, no dudes en comunicarte con nosotros a <a href="mailto:botissoftware@gmail.com" onClick={() => navigator.clipboard.writeText('botissoftware@gmail.com')}>botissoftware@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

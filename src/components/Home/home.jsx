import avatar from "../../assets/avatar.png";
import bg from "../../assets/background.png";
import { SiArchlinux } from "react-icons/si";
const Home = () => {
  return (
    <div className="w-full h-full flex">
      {/*Contenedor del avatar */}
      <section
        className="w-1/2 h-full flex justify-center items-end bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          maskImage: "linear-gradient(to right, black 60%, rgba(0,0,0,0) 100%)",
        }}
      >
        <img src={avatar} className="object-cover w-[70%] bg-transparent" />
      </section>

      {/*Contenedor de información */}
      <section className="pt-14 w-1/2 h-screen flex justify-center items-center">
        <div className="relative w-[98%] h-[85%] flex flex-col items-start gap-2 justify-center backdrop-blur-md bg-[#101010] pl-2 border-6  rounded-[10px] border-[#039ea6] border-double shadow-[0px_0px_10px_4px_#039ea6] font-mono text-green-400">
          {/* Barra de título estilo Linux */}
          <div className="absolute top-0 left-0 w-full h-10 flex items-center justify-between bg-[#252525] text-white border-b border-gray-600 rounded-t-[8px] px-4">
            <p className="text-sm text-gray-300">
              Terminal - Facundo@archlinux
            </p>
            <div className="flex gap-3 text-gray-400">
              <p className="hover:text-white cursor-pointer">🗕</p>{" "}
              {/* Minimizar */}
              <p className="hover:text-white cursor-pointer">🗖</p>{" "}
              {/* Maximizar */}
              <p className="hover:text-red-500 cursor-pointer">✖</p>{" "}
              {/* Cerrar */}
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-1">
            <p className="text-lg text-green-400 animate-pulse">
              {">>>"}Sincronizando bases de datos... ✅
            </p>

            <p className="text-lg text-green-400 font-bold">
              {">>>"}Información Personal
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full text-green-400 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
              {/* Ícono de Arch Linux grande y visible */}
              <div className="w-full sm:w-auto flex items-center justify-center sm:justify-start">
                <SiArchlinux
                  size={150}
                  className="text-green-400"
                />
              </div>

              {/* Información personal */}
              <div className="flex flex-col gap-1 px-2 sm:px-0 text-green-400 py-2">
                <span>
                  <span className="text-green-300">~</span> Nombre:{" "}
                  <span className="font-bold">Facundo Aylan</span>
                </span>
                <span>
                  <span className="text-green-300">~</span> Profesión:{" "}
                  <span className="font-bold">Desarrollador Full-Stack</span>
                </span>
                <span>
                  <span className="text-green-300">~</span> Habilidad:{" "}
                  <span className="font-bold">Aplicaciones web y móviles</span>
                </span>
                <span>
                  <span className="text-green-300">~</span> Ubicación:{" "}
                  <span className="font-bold">Argentina</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-green-400 font-bold">{">>>"} Redes</p>
          </div>

          {/* Redes Sociales con estilo terminal */}
          <div className="flex gap-4 mt-4 w-full justify-center items-center">
            <a
              href="https://github.com/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-green-600 rounded-[5px] text-gray-900 font-bold tracking-widest transition-transform duration-300 hover:scale-110"
            >
              🖥️ git clone GitHub
            </a>
            <a
              href="https://linkedin.com/in/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-green-600 rounded-[5px] text-gray-900 font-bold tracking-widest transition-transform duration-300 hover:scale-110"
            >
              🔗 curl LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

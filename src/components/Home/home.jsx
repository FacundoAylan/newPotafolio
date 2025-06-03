import avatar from "../../assets/avatar.png";
import bg from "../../assets/background.png";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

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
      <section className="pt-14 relative w-1/2 h-screen flex flex-col justify-center items-end text-white gap-6">
      <div className="w-[98%] h-[80%] flex flex-col items-center gap-2 justify-center rounded-lg backdrop-blur-lg bg-white/5 p-4 border-6 border-r-0 rounded-r-none rounded-tl-[20px] rounded-bl-[20px] border-[#039ea6] border-double shadow-[0px_0px_10px_4px_#039ea6]">
      {/* Título con animación */}
          <h1 className="text-6xl font-black text-[#0EC143] text-center">
            ¡Hola, soy Facundo Aylan! 👨‍💻
          </h1>
          <p className="text-2xl text-gray-300 text-center">
            Desarrollador Full Stack | Creando soluciones digitales eficientes 🚀
          </p>

          {/* Redes Sociales con efecto neón */}
          <div className="flex gap-6 mt-2 w-full max-w-lg justify-center">
            <a
              href="https://github.com/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="px-6 py-3 font-black rounded-lg border border-[#0EC143] text-white bg-transparent transition-transform duration-300 hover:scale-110 shadow-neon"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="px-6 py-3 font-black rounded-lg border border-[#0EC143] text-white bg-transparent transition-transform duration-300 hover:scale-110 shadow-neon"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

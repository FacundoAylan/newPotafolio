import avatar from "../../assets/avatar.png";
import bg from "../../assets/background.png";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const Home = () => {
  return (
    <div className="w-full h-full flex">
      {/*Contenedor del avatar */}
      <section
        className="w-1/2 h-full flex justify-center items-end bg-cover bg-center "
        style={{
          backgroundImage: `url(${bg})`,
          maskImage: "linear-gradient(black 80%, transparent)",
        }}
      >
        <img src={avatar} className="object-cover w-[70%] bg-transparent" />
      </section>

      {/*Contenedor de información */}
      <section className="relative w-1/2 h-full flex flex-col justify-center items-center text-white/80 gap-4">
        <div 
          className="bg-[#005562] backdrop-blur-md border-neon border-white/80 border-2 rounded-lg px-4 py-6"
        >
          <h1 className="text-5xl font-black text-[#02a9b5] ">
            Full stack developer
          </h1>
          <p className="text-2xl text-neon text-center">Facundo aylan</p>

          {/*Redes */}
          <div className="flex gap-6 mt-6 w-full justify-center">
            <a
              href="https://github.com/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="tracking-widest bg-[#00525e] border border-white rounded-md px-4 py-2 font-black transition-transform transition-colors duration-300 hover:scale-105 text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/tuUsuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border border-white rounded-md px-4 py-2 font-black tracking-widest transition-transform transition-colors duration-300 hover:scale-105 bg-[#00525e] text-white"
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

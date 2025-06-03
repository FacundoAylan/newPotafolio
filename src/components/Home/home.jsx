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
      <section className="pt-14 relative w-1/2 h-full flex flex-col justify-center items-center  text-white gap-4">
        {/* Título */}
        <h1 className="text-[#0EC143] w-full text-6xl font-black tracking-wide text-center uppercase">
          Full Stack Developer
        </h1>

        {/* Nombre */}
        <p className="text-3xl text-[#33A6A6] text-center font-semibold">
          Facundo Aylan
        </p>

        {/* Redes Sociales */}
        <div className="flex gap-6 mt-6 w-full max-w-md justify-center">
          <a
            href="https://github.com/tuUsuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="tracking-wide border border-[#33A6A6] rounded-lg px-5 py-3 font-black transition-transform duration-300 hover:scale-110 bg-[#00525e] text-white shadow-md hover:bg-[#007a85]"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tuUsuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="border border-[#33A6A6] rounded-lg px-5 py-3 font-black tracking-wide transition-transform duration-300 hover:scale-110 bg-[#00525e] text-white shadow-md hover:bg-[#007a85]"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

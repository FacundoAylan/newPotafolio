import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menu = ['Inicio', 'Sobre mí', 'Proyectos', 'Contacto'];

const NavBar = ({ setFace }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full h-full px-2 tracking-widest cursor-pointer">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-sm lg:text-xl font-bold text-[#0EC143] cursor-pointer hover:scale-110 transition-transform">
          Facundo
        </h1>

        {/* Botón de menú hamburguesa */}
        <button
          className="text-2xl sm:hidden text-[#0EC143] focus:outline-none transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú para pantallas pequeñas */}
        <div
          className={`absolute top-16 left-0 w-full bg-[#1A1A1A] backdrop-blur-lg overflow-hidden transition-all duration-500 sm:hidden ${
            isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-center text-lg">
            {menu.map((item, index) => (
              <li
                key={index}
                className="py-2 w-full text-center hover:bg-[#0EC143]/20 cursor-pointer transition-all"
                onClick={() => {
                  setFace(index);
                  setIsOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Menú para pantallas grandes */}
        <ul className="hidden sm:flex space-x-4 text-sm lg:space-x-6 lg:text-lg">
          {menu.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-[#0EC143] transition-colors"
              onClick={() => setFace(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

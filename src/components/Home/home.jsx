import {
  AiOutlineClose,
  AiOutlineExpand,
  AiOutlineMinus,
} from "react-icons/ai";
import avatar from "../../assets/avatar.png";
import bg from "../../assets/background.png";

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
        <div className="relative w-[98%] h-[85%]  backdrop-blur-md bg-[#101010] border-6  rounded-[10px] border-[#039ea6] border-double shadow-[0px_0px_10px_4px_#039ea6] font-mono text-green-400">
          <div className="w-full h-full border-2 border-gray-800 rounded-lg overflow-hidden bg-gray-900 text-gray-300 font-mono">
            {/* Barra de título */}
            <div className="flex items-center justify-between bg-gray-800 px-2 py-1">
              <p className="text-sm text-white/80 font-bold">
                Visual Studio Code - Bienvenidos.jsx
              </p>
              <div className="flex space-x-2">
                <span className="w-4 h-4 text-yellow-500">
                  <AiOutlineMinus />
                </span>
                <span className="w-4 h-4 text-green-500">
                  <AiOutlineExpand />
                </span>
                <span className="w-4 h-4 text-red-500">
                  <AiOutlineClose />
                </span>
              </div>
            </div>

            {/* Área de código */}
            <div className="pl-4 pt-1 text-md flex gap-4">
              {/* Código */}
              <div>
                <p className="text-blue-400">{`import React from 'react';`}</p>
                <p className="text-purple-400 mt-1">{`function Bienvenidos() {`}</p>
                <p className="pl-4 text-purple-400">{`return (`}</p>
                <p className="pl-8 text-yellow-400">{`<main>`}</p>

                <div className="text-green-500 pl-14 text-md rounded-md shadow-lg text-gray-300">
                  <p>
                    {`<h1>`}<span className="font-bold px-1">Hola, soy Facundo</span>{`</h1>`}
                  </p>
                  <p>
                    {`<h2>`}
                    <span className="font-semibold px-1">
                      Desarrollador Full Stack
                    </span>
                    {`</h2>`}
                  </p>
                  <p>
                    {`<p>`}
                    <span className="px-1 font-semibold">Apasionado por la tecnología</span>
                    {`</p>`}
                  </p>
                  <p>
                    {`<h3>`}
                    <span className="px-1 font-semibold">Aprendiendo React y Node.js.</span>
                    {`</h3>`}
                  </p>
                </div>

                <p className="pl-14 text-green-500">
                  {`<a href='/' target='_blank'>`}
                  <a
                    href="https://github.com/FacundoAylan"
                    target="_blank"
                    className="font-bold hover:scale-105 hover:cursor-pointer transition-transform duration-200 inline-block px-2"
                  >
                    Github
                  </a>
                  {`</a>`}
                </p>
                <p className="pl-14 text-green-500">
                  {`<a href='/' target='_blank'>`}
                  <a
                    href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
                    target="_blank"
                    className="px-2 hover:scale-105 hover:cursor-pointer transition-transform duration-200 inline-block font-bold"
                  >
                    LinkedIn
                  </a>
                  {`</a>`}
                </p>

                <p className="pl-8 text-yellow-400">{`</main>`}</p>
                <p className="pl-4 text-purple-400">{`);`}</p>
                <p className="text-purple-400">{`}`}</p>
                <p className="text-blue-400">{`export default Bienvenidos;`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

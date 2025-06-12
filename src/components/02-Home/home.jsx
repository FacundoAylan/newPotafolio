import {
  AiOutlineClose,
  AiOutlineExpand,
  AiOutlineMinus,
} from "react-icons/ai";
import avatar from "../../assets/avatar.png";
import bg from "../../assets/background.png";
import { Rnd } from "react-rnd";
import { useEffect, useState } from "react";
import PresentacionAnimada from "./components/presentacion";

const Home = () => {
  const [cursor, setCursor] = useState("pointer");

  useEffect(() => {
    const handleMouseDown = () => {
      setCursor("grabbing");
    };

    const handleMouseUp = () => {
      setCursor("pointer");
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

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
        <div 
          className="relative w-[98%] h-[85%] backdrop-blur-md bg-[#101010] border-6  rounded-[10px] border-[#039ea6] border-double shadow-[0px_0px_10px_4px_#039ea6] font-mono text-green-400"
        >
          {/* Barra de título */}
          <div className=" h-[10%] flex items-center justify-between bg-gray-800 px-2 py-1">
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
          <div className="h-[90%]">
            <PresentacionAnimada />
          </div>
                
        </div>
      </section>

    </div>
  );
};

export default Home;

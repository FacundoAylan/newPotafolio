import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import image from "../../assets/avatar.png";

const projects = [
  { id: 1, name: "Proyecto 1", image: image, description: "Descripción 1" },
  { id: 2, name: "Proyecto 2", image: image, description: "Descripción 2" },
  { id: 3, name: "Proyecto 3", image: image, description: "Descripción 3" }
];

const Proyects = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextProject = () => {
    if (activeIndex < projects.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevProject = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold text-[#00b0ff]">🚀 Proyectos 🚀</h1>
      <div className="relative w-[80%] h-[60%] flex justify-center items-center">
        {/* Botón Anterior (oculto si está en el primer proyecto) */}
        {activeIndex > 0 && (
          <button onClick={prevProject} className="absolute left-0 text-[#0cbe43] text-4xl z-10">
            <FaArrowCircleLeft />
          </button>
        )}

        {/* Cards con profundidad lateral */}
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={project.id}
              className="absolute w-[280px] h-[350px] bg-[#012f35] border-[#039ea6] border-double shadow-[0px_0px_10px_4px_#039ea6] rounded-[30px] text-center p-6 flex flex-col items-center"
              initial={{ scale: isActive ? 1 : 0.85, opacity: isActive ? 1 : 0.6 }}
              animate={{
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.6,
                zIndex: isActive ? 3 : 1,
                x: isActive ? 0 : index < activeIndex ? -180 : 180,
                y: isActive ? 0 : 30
              }}
              transition={{ duration: 0.5 }}
            >
              <img className="w-32 h-32 rounded-full mb-4" src={project.image} alt={project.name} />
              <h2 className="text-2xl font-semibold text-[#06c1c1]">{project.name}</h2>
              <div className="flex flex-col gap-4 mt-4">
                <button className="px-4 py-2 bg-[#0cbe43] text-white rounded-lg shadow-lg">Proyecto</button>
                <button className="px-4 py-2 bg-[#0cbe43] text-white rounded-lg shadow-lg">Descripción</button>
              </div>
            </motion.div>
          );
        })}

        {/* Botón Siguiente (oculto si está en el último proyecto) */}
        {activeIndex < projects.length - 1 && (
          <button onClick={nextProject} className="absolute right-0 text-[#0cbe43] text-4xl z-10">
            <FaArrowCircleRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Proyects;

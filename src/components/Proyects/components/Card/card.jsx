import { motion } from "framer-motion";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const CardProyects = ({projects, nextProject, prevProject, activeIndex, openVideoModal})=>{
  return(
    <div className="relative w-[80%] h-[60%] flex justify-center items-center">
    <button
      onClick={prevProject}
      className="absolute left-0 text-[#0cbe43] text-4xl z-10"
    >
      <FaArrowCircleLeft />
    </button>

    {projects.map((project, index) => {
      const isActive = index === activeIndex;
      return (
        <motion.div
          key={project.id}
          className="absolute w-[280px] h-[350px] bg-[#012f35] border-[#039ea6] border-double shadow-[0px_0px_10px_4px_#039ea6] rounded-[30px] text-center p-6 flex flex-col items-center"
          initial={{
            scale: isActive ? 1 : 0.75,
            opacity: isActive ? 1 : 0.5,
          }}
          animate={{
            scale: isActive ? 1 : 0.75,
            opacity: isActive ? 1 : 0.5,
            zIndex: isActive ? 3 : 1,
            x: isActive
              ? 0
              : index === activeIndex - 1 ||
                (activeIndex === 0 && index === projects.length - 1)
              ? -150
              : index === activeIndex + 1 ||
                (activeIndex === projects.length - 1 && index === 0)
              ? 150
              : 0,
            y: isActive ? 0 : 10,
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-32 h-32 rounded-full mb-4"
            src={project.image}
            alt={project.name}
          />
          <h2 className="text-2xl font-semibold text-[#06c1c1]">
            {project.name}
          </h2>
          <div className="flex flex-col gap-4 mt-4">
            <button
              onClick={() => openVideoModal(project)}
              className="px-4 py-2 bg-[#0cbe43] text-white rounded-lg shadow-lg"
            >
              Proyecto
            </button>
            <button
              onClick={() => openDescriptionModal(project)}
              className="px-4 py-2 bg-[#0cbe43] text-white rounded-lg shadow-lg"
            >
              Descripción
            </button>
          </div>
        </motion.div>
      );
    })}

    <button
      onClick={nextProject}
      className="absolute right-0 text-[#0cbe43] text-4xl z-10"
    >
      <FaArrowCircleRight />
    </button>
  </div>
  )
};

export default CardProyects;
import { useState } from "react";
import image from "../../assets/avatar.png";
import ModalView from "./components/Modal/ModalView";
import ModalDescription from "./components/Modal/ModalDescription";
import CardProyects from "./components/Card/card";

const projects = [
  {
    id: 1,
    name: "Proyecto 1",
    image: image,
    description: "Descripción 1",
    video: "/ruta-del-video1.mp4",
  },
  {
    id: 2,
    name: "Proyecto 2",
    image: image,
    description: "Descripción 2",
    video: "/ruta-del-video2.mp4",
  },
  {
    id: 3,
    name: "Proyecto 3",
    image: image,
    description: "Descripción 3",
    video: "/ruta-del-video3.mp4",
  },
];

const Proyects = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const nextProject = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const openVideoModal = (project) => {
    setCurrentProject(project);
    setShowVideoModal(true);
  };

  const openDescriptionModal = (project) => {
    setCurrentProject(project);
    setShowDescriptionModal(true);
  };

  const closeModals = () => {
    setShowVideoModal(false);
    setShowDescriptionModal(false);
    setCurrentProject(null);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-12 pt-6">
      <h1 className="text-4xl font-bold text-[#00b0ff]">🚀 Proyectos 🚀</h1>
      {/*Cards */}
      <CardProyects
        projects={projects}
        nextProject={nextProject}
        prevProject={prevProject}
        activeIndex={activeIndex}
        openVideoModal={openVideoModal}
      />
      {/* Modal de Video */}
      {showVideoModal && currentProject && (
        <ModalView
          isOpen={showVideoModal}
          currentProject={currentProject}
          closeModals={closeModals}
          openDescriptionModal={openDescriptionModal}
        />
      )}

      {/* Modal de Descripción */}
      {showDescriptionModal && currentProject && (
        <ModalDescription
          closeModals={closeModals}
          openVideoModal= {openVideoModal}
          currentProject= {currentProject}
        />
      )}
    </div>
  );
};

export default Proyects;

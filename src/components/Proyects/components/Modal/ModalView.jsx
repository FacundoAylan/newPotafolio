import { FaTimes } from "react-icons/fa";

const ModalView = ({ isOpen, currentProject, closeModals, openDescriptionModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-14">
      <div className="relative bg-[#012f35] p-6 rounded-lg shadow-lg text-center w-[550px] h-[95%]">
        <button
          onClick={closeModals}
          className="absolute top-2 right-2 text-red-500 text-2xl"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-semibold text-[#06c1c1]">
          {currentProject.name}
        </h2>
        <video className="w-full h-[300px] mt-4" controls>
          <source src={currentProject.video} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <button
          onClick={() => openDescriptionModal(currentProject)}
          className="mt-4 px-4 py-2 bg-[#0cbe43] text-white rounded-lg shadow-lg"
        >
          Ver Descripción
        </button>
      </div>
    </div>
  );
};

export default ModalView;

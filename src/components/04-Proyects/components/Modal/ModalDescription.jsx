import { FaTimes } from "react-icons/fa";

const ModalDescription = ({ closeModals, openVideoModal, currentProject}) => {
  return(
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-14">
    <div className="relative bg-[#012f35] p-6 rounded-lg shadow-lg text-center w-[550px]">
      <button
        onClick={closeModals}
        className="absolute top-2 right-2 text-red-500 text-2xl"
      >
        <FaTimes />
      </button>
      <h2 className="text-2xl font-semibold text-[#06c1c1]">
        {currentProject.name}
      </h2>
      <p className="text-white mt-4">{currentProject.description}</p>
      <button
        onClick={() => {
          closeModals(); // Cierra el modal actual primero
          openVideoModal(currentProject); // Luego abre el modal de video
        }}
        className="mt-4 px-4 py-2 bg-[#0cbe43] text-white rounded-lg shadow-lg"
      >
        Ver Proyecto
      </button>
    </div>
  </div>
  )
};
export default ModalDescription;
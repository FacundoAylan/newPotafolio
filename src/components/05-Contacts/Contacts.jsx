import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaEnvelope, FaUser, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 pt-14">
      <h1 className="text-4xl font-bold text-[#00b0ff]">📩 Contacto 📩</h1>

      <motion.div
        className="w-[400px] bg-[#012f35] p-6 rounded-lg shadow-[0px_0px_10px_4px_#039ea6] flex flex-col gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center bg-[#039ea6] p-2 rounded-lg">
            <FaUser className="text-white mr-2" />
            <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-none outline-none text-white placeholder-white" required />
          </div>

          <div className="flex items-center bg-[#039ea6] p-2 rounded-lg">
            <FaEnvelope className="text-white mr-2" />
            <input type="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-none outline-none text-white placeholder-white" required />
          </div>

          <div className="flex items-center bg-[#039ea6] p-2 rounded-lg">
            <FaPhone className="text-white mr-2" />
            <input type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-none outline-none text-white placeholder-white" />
          </div>

          <textarea name="message" placeholder="Mensaje..." value={formData.message} onChange={handleChange} className="w-full bg-[#039ea6] p-2 rounded-lg text-white placeholder-white outline-none resize-none h-24" required />

          <button type="submit" className="px-4 py-2 bg-[#0cbe43] text-white rounded-lg shadow-lg">
            Enviar
          </button>
        </form>
      </motion.div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-[#012f35] p-6 rounded-lg shadow-lg text-center w-[400px]">
            <button onClick={closeModal} className="absolute top-2 right-2 text-red-500 text-2xl">
              <FaTimes />
            </button>
            <h2 className="text-2xl font-semibold text-[#06c1c1]">✅ Mensaje Enviado</h2>
            <p className="text-white mt-4">Gracias por contactarme. Me pondré en contacto contigo pronto. 📬</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

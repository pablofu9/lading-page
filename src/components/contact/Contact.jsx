import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  // Función para manejar el cambio de los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Usar EmailJS para enviar el correo
    emailjs
      .sendForm(
        "service_nfbteg2", // Tu Service ID
        "template_58udbug", // Tu Template ID
        e.target,
        "CtvjUqqOcDq7YAVxq" // Tu User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
          
          // Ocultar el mensaje después de 5 segundos
          setTimeout(() => {
            setFormStatus("");  // Esto ocultará el mensaje
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setFormStatus("Hubo un error. Intenta nuevamente.");
  
          // Ocultar el mensaje de error después de 5 segundos
          setTimeout(() => {
            setFormStatus("");  // Esto ocultará el mensaje
          }, 5000);
        }
      );

    // Limpiar el formulario después de enviarlo
    setFormData({ name: "", email: "", message: "" });
  };
  

  return (
    <motion.div
    className="w-full mx-auto py-11 flex flex-col items-center px-11 text-white"
    id="contact"
    initial={{ opacity: 0, y: 100 }} // Comienza con opacidad 0 y desplazado hacia abajo
    whileInView={{ opacity: 1, y: 0 }} // Al aparecer, vuelve a su posición original
    transition={{ duration: 1.2 }} // Duración de la animación
    viewport={{ once: false }} // La animación se activa cada vez que el elemento entra en vista
  >
      <div className="border border-tertiary/50 w-full mb-6" />
      <h2 className="text-4xl md:text-4xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
        Contacto
      </h2>
      <div className="w-full flex flex-col sm:flex-row gap-x-20">
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          <div className="flex flex-col space-y-3">
            <label className="text-lg" htmlFor="name">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 bg-gray-800 text-white focus:outline-none focus:border-orangeColor"
              required
            />

            <label className="text-lg" htmlFor="email">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 bg-gray-800 text-white focus:outline-none focus:border-orangeColor"
              required
            />

            <label className="text-lg" htmlFor="message">
              Mensaje:
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="p-3 rounded-lg border border-gray-300 bg-gray-800 text-white focus:outline-none focus:border-orangeColor"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Enviar mensaje
          </button>
        </form>
        <div className="mt-10 text-start p">
          <h3 className="text-2xl md:text-2xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
            Información de contacto
          </h3>
          <span className="flex flex-row mb-3">
            <TiLocationArrowOutline size={30} className="mr-3" /> Valladolid,
            España
          </span>
          <span className="flex flex-row mb-3">
            <MdOutlinePhone size={30} className="mr-3" /> +34 679 191 488
          </span>
          <span className="flex flex-row mb-3">
            <MdOutlineEmail size={30} className="mr-3" /> pfuertesios@gmail.com
          </span>
        </div>
      </div>
      {/* Mensaje de estado después del envío */}
      {formStatus && (
        <div className="mt-6 text-green-400 font-semibold text-center">
          {formStatus}
        </div>
      )}

      {/* Información de contacto */}
    </motion.div>
  );
};

export default Contact;

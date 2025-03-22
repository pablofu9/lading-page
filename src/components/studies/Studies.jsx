import React from "react";
import { motion } from "framer-motion"; // Importar motion de framer-motion

const Studies = () => {
  return (
    <motion.div
      className="w-full mx-auto px-11 py-11 flex flex-col items-center"
      id="studies"
      animate={{ opacity: 1, x: 100 }}
      initial={{ opacity: 0, x: -300 }} // Inicialmente con opacidad 0 y desplazado a la izquierda
      whileInView={{ opacity: 1, x: 0 }} // Cuando se ve, vuelve a la posición original
      transition={{ duration: 1.2 }} // Duración de la animación
      viewport={{ once: false }} // Se activa solo una vez cuando entra en vista
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl md:text-4xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
          Estudios
        </h2>
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 items-start w-auto">
          <div className="border p-2 rounded-md">
            <h1 className="text-md md:text-md font-bold mb-2 uppercase bg-gradient-blue-purple bg-clip-text text-transparent text-center">
              DAM - Desarrollo de aplicaciones multiplataforma (FP)
            </h1>
            <span>09/2022 - 04/2023</span>
            <h2>IES Ribera de castilla</h2>
          </div>
          <div className="border p-2 rounded-md">
            <h1 className="text-md md:text-md font-bold mb-2 uppercase bg-gradient-blue-purple bg-clip-text text-transparent text-center">
              Grado Administración y dirección de empresas (ADE)
            </h1>
            <span>03/2019 - 05/2022</span>
            <h2>Universidad de Valladolid</h2>
          </div>
          <div className="border p-2 rounded-md">
            <h1 className="text-md md:text-md font-bold mb-2 uppercase bg-gradient-blue-purple bg-clip-text text-transparent text-center">
              DAW - Desarrollo de aplicaciones Web (FP)
            </h1>
            <span>09/2022 - 04/2023</span>
            <h2>IES Galileo</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Studies;

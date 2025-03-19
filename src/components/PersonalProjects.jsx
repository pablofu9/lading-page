import React from "react";
import { motion } from "framer-motion"; // Importar motion de framer-motion
import Project from "./proyects/Proyect";
import Tink1 from "../assets/images/tink/tink1.jpeg"
import Tink2 from "../assets/images/tink/tink2.jpeg"
import Tink3 from "../assets/images/tink/tink3.jpeg"
import Tink4 from "../assets/images/tink/tink4.jpeg"
import Tink5 from "../assets/images/tink/tink5.jpeg"
import Tink6 from "../assets/images/tink/tink6.jpeg"

const PersonalProjects = () => {
  const bagItData = {
    title: "Bag It",
    images: [],
    description:
      "Bag It, una aplicación de listas de la compra que permite hacerseguimiento de compras y gastos. Creada con Swift y SwiftUI,utilizando Clean Architecture y MVVM. Implementé FirebaseHosting como backend y realicé todo el proceso: desde laplanificación y diseño en Figma hasta el desarrollo y publicación en el App Store.",
  };
  const tinkData = {
    title: "Tink",
    images: [Tink1, Tink2, Tink3, Tink4, Tink5, Tink6],
    description: "Estoy trabajando en una nueva app que estará muy pronto en el App Store, Tink!! La idea principal de la app, es conectar personas a traves de sus habilidades, la app consiste en un Market Place en el cual los usuarios podrán publicar sus habilidades y ser contactados por el resto de usuarios para acordar o contratar sus servicios. La app usa MVVM junto con Clean architecture como arquitectura de diseño, SwiftUI como framework de desarrollo y Swift como lenguaje, también usa múltiples tecnologías accesorias como Firebase para autenticación y base de datos o librerías como Lotties para dar una aspecto gráfico innovador. Está casi terminada, despero que os guste.  😃."
  };
  
  return (
    <motion.div
      className="w-full mx-auto px-11 py-11 flex flex-col items-center"
      id="projects"
      initial={{ opacity: 0, x: -100 }} // Inicialmente con opacidad 0 y desplazado a la izquierda
      whileInView={{ opacity: 1, x: 0 }} // Cuando se ve, vuelve a la posición original
      transition={{ duration: 1.2 }} // Duración de la animación
      viewport={{ once: false }} // Se activa solo una vez cuando entra en vista
    >
      <div className="">
        <div className="my-auto mx-6">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
            Proyectos personales
          </h2>
          <div>
             <Project
              title={tinkData.title}
              images={tinkData.images}
              description={tinkData.description}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalProjects;

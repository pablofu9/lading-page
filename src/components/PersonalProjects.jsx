import React from "react";
import { motion } from "framer-motion"; // Importar motion de framer-motion
import Project from "./proyects/Proyect";
import Tink1 from "../assets/images/tink/tink1.jpeg";
import Tink2 from "../assets/images/tink/tink2.jpeg";
import Tink3 from "../assets/images/tink/tink3.jpeg";
import Tink4 from "../assets/images/tink/tink4.jpeg";
import Tink5 from "../assets/images/tink/tink5.jpeg";
import Tink6 from "../assets/images/tink/tink6.jpeg";
import BagIt1 from "@/assets/images/bagit/gastos.jpeg";
import BagIt2 from "@/assets/images/bagit/modo_oscuro.jpeg";
import TinkLogo from "@/assets/images/tink/tinkLogo.png";
import BagItLogo from "@/assets/images/bagit/bagItLogo.png";

const PersonalProjects = () => {
  const bagItData = {
    title: "Bag It",
    images: [BagIt1, BagIt2],
    description:
      "Bag It, una aplicación de listas de la compra que permite hacerseguimiento de compras y gastos. Creada con Swift y SwiftUI,utilizando Clean Architecture y MVVM. Implementé FirebaseHosting como backend y realicé todo el proceso: desde laplanificación y diseño en Figma hasta el desarrollo y publicación en el App Store.",
      shortText: "Bag It es una app de listas de compras con gestión de gastos, MVVM, Swift y SwiftUI."
  };
  const tinkData = {
    title: "Tink",
    images: [Tink1, Tink2, Tink3, Tink4, Tink5, Tink6],
    description:
      "Market Place en el cual los usuarios podrán publicar sus habilidades y ser contactados por el resto de usuarios para informarse y contratar sus servicios. La app usa MVVM junto con Clean architecture como arquitectura de diseño, SwiftUI como framework de desarrollo y Swift como lenguaje. También usa múltiples tecnologías accesorias como Firebase para autenticación y base de datos, o librerías como Lotties para dar una aspecto gráfico innovador. Está casi terminada, espero que os guste! 😃",
    shortText:
      "Market Place de habilidades, para encontrar y ofertar la tuya. Ha sido desarrollada con Swift y SwiftUI.",
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
        <div className="mx-6">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
            Proyectos personales
          </h2>
          <div className="flex flex-col sm:flex-row gap-x-6">
            <Project
              title={bagItData.title}
              images={bagItData.images}
              description={bagItData.description}
              hasLink="https://apps.apple.com/us/app/bag-it/id6740699489"
              logo={BagItLogo}
              shortText={bagItData.shortText}
            />
            <Project
              title={tinkData.title}
              images={tinkData.images}
              description={tinkData.description}
              logo={TinkLogo}
              shortText={tinkData.shortText}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalProjects;

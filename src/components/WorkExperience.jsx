import React from "react";
import { FaApple, FaSwift } from "react-icons/fa"; // Icono para ejemplo
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import { FaAngular } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="mt-4 md:mt-4 text-left flex flex-col items-center h-full justify-start py-11 md:py-0"
      id="work"
    >
      <div className="mt-4 md:mt-4 text-left flex flex-col h-full py-11 md:py-11 px-11">
        <div className="my-auto mx-6">
        <h2 className="text-4xl md:text-4xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
            Experiencia laboral
          </h2>
          <div className="flex flex-col sm:flex-row gap-10">
            <ExperienceCard
              company="Five Flames Mobile"
              job="IOS developer"
              date="03/2023 - 01/2025"
              description={[
                "Desarrollo y despliegue de múltiples aplicaciones iOS utilizando SwiftUI.",
                "Aplicación de arquitectura MVVM y principios de Clean Code.",
                "Implementación de pruebas unitarias con XCTest.",
                "Optimización del rendimiento y accesibilidad.",
              ]}
              proyects={[
                "Sistema de movilidad de Guagua Las Palmas, optimizando la experiencia de los usuarios en el transporte público.",
                "App del Aeropuerto de Shannon Employee, mejorando la gestión del personal y operaciones.",
              ]}
              techIcon={FaSwift}
            />
             <ExperienceCard
              company="Astibot S.A"
              job="Front end Developer"
              date="03/2023 - 01/2025"
              description={[
                "Desarrollo de interfaces Web con HTML, CSS Y JS, usando el framework Angular.",
                "Aplicación de diseño responsivo co HTML, CSS y Bootstrap asegurando una experiencia optima para todos los dispositivos.",
              ]}
              proyects={[]}
              techIcon={FaAngular}
            />
           
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;

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
      <div className="mt-4 md:mt-4 text-left flex flex-row h-full py-11 md:py-11 px-11">
        <div className="my-auto mx-6">
        <h2 className="text-4xl md:text-4xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
            Experiencia laboral
          </h2>
          <div className="space-y-10">
            <ExperienceCard
              company="Five Flames Mobile"
              job="IOS developer"
              date="03/2023 - 01/2025"
              description={[
                "Desarrollo de aplicaciones IOS, tanto en UIKit como SwiftUI, encargado de todo el ciclo de vida de las Apps, desde su planteamiento y desarrollo hasta el despliegue",
                "Colaboración en equipos multidisciplinarios",
                "Implementación de sistemas de testing como XCTest o Mockito",
                "Integración de API Rest y sistemas de autenticación",
                "Trabajo conjunto con diseñadores UI / UX y backend developers para cumplir con las tareas del proyecto"
              ]}
              proyects={[
                "Guaguas LPA: Aplicación de movilidad de Las Palmas de Gran Canaria",
                "Shannon Employee App: Aplicación para el empleado del aeropuerto de Shannon",
                "I66: Aplicación de control de la Autopista Estadounidense I66",
                "Samyl empleado: Aplicación que manejaba el control de fichajes de los empleados de la empresa de limpieza Samyl"
              ]}
              techIcon={FaSwift}
            />
             <ExperienceCard
              company="Astibot S.A"
              job="Front end Developer"
              date="04/2019 - 11/2019"
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

import React from "react";
import LanguageSkill from "./LanguageSkill";

const AboutUs = () => {
  return (
    <div
      className="w-full mx-auto px-11 py-11 flex flex-col items-center"
      id="about"
    >
      <div className="">
        <div className="my-auto mx-6">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 uppercase bg-gradient-orange-red bg-clip-text text-transparent text-center">
            Sobre mí
          </h2>
          <p className="text-base lg:text-lg w-full">
            {" "}
            {/* Aquí puedes añadir w-full para asegurar que ocupe todo el ancho */}
            Soy desarrollador iOS con más de 2 años trabajando con Swift,
            SwiftUI y todo el ecosistema de Apple. Me encanta estar involucrado
            en todas las etapas de la creación de una app, desde la idea inicial
            hasta que la lanzamos en el App Store. Además, tengo experiencia con
            React y React Native, lo que me permite crear apps para iOS y
            Android sin complicaciones, siempre con un enfoque en la experiencia
            de usuario, buen rendimiento y código ordenado.
          </p>
          <div className="flex flex-col pt-4">
            <h3 className="text-orangeColor text-xl font-bold uppercase">Idiomas</h3>
            <LanguageSkill language="Español" level={5} /> {/* Nivel 5 */}
            <LanguageSkill language="Ingles" level={4} /> {/* Nivel 5 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

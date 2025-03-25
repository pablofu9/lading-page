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
            Desarrollador iOS con más de 2 años de experiencia en Swift, SwiftUI
            y tecnologías de Apple, especializado en todo el ciclo de vida de
            una app, desde la planificación hasta su lanzamiento en el App
            Store. Además, cuento con experiencia en React y React Native,
            permitiéndome desarrollar aplicaciones multiplataforma con un
            enfoque en UX, rendimiento y código limpio. Soy un apasionado del
            desarrollo móvi, tanto en tecnologías nativas como híbridas
          </p>
          <div className="flex flex-col pt-4">
            <h3 className="text-orangeColor text-xl font-bold uppercase">
              Idiomas
            </h3>
            <LanguageSkill language="Español" level={5} /> {/* Nivel 5 */}
            <LanguageSkill language="Ingles" level={4} /> {/* Nivel 5 */}
            <LanguageSkill language="Frances" level={4} /> {/* Nivel 5 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

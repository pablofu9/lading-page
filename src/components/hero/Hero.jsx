import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SocialIcon from "@/components/SocialIcon";
import PFBD from "@/assets/images/pf_db.png"

const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mx-auto h-auto py-8 px-4">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-[300px] lg:w-[300px] items-center">
        <img
          src={PFBD}
          alt="Pablo Fuertes Ruiz"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-2 px-5">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
          <span className="bg-gradient-orange-red bg-clip-text text-transparent">
            I'm a
          </span>
          <br />
          <span className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <TypeAnimation
              sequence={["IOS Developer", 1000, "React Native", 1000]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="pt-11">
          Front End developer con más de dos años de experiencia en el
          desarrollo de Apps, especializado en el ecosistema apple, Swift y
          SwiftUI.
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row">
            <div className="my-8">
              <a
                href="/CV_PabloFuertes.pdf" // Ruta al archivo de tu CV
                className="px-6 py-3 w-full rounded-xl mr-4 text-white bg-gradient-orange-red bg-[length:200%] bg-left transition-all duration-500 ease-in-out hover:bg-right"
                download // Este atributo indica que el enlace es para descargar el archivo
              >
                Descargar CV
              </a>
            </div>
            <div className="my-8">
              <a
                href="#contact" // Esto se asegura de que se desplace a la sección con el id "contact"
                className="px-6 py-3 w-full rounded-xl mr-4 text-white bg-transparent bg-[length:200%] transition-all duration-500 ease-in-out border hover:bg-white hover:text-black"
                onClick={(e) => {
                  e.preventDefault(); // Prevenir comportamiento por defecto
                  handleScroll("contact"); // Función para desplazarse suavemente a la sección
                }}
              >
                Contactar
              </a>
            </div>
          </div>
          <div className="flex flex-row">
          <SocialIcon
            icon={FaLinkedinIn}
            url="https://www.linkedin.com/in/pablofu9"
          />
          <SocialIcon
            icon={FaGithub}
            url="https://github.com/pablofu9"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

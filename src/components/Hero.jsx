import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "../assets/images/imagenCara.jpg"
const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mx-auto h-auto py-8 px-4">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-[300px] lg:w-[300px] ">
        <img
          src={HeroImage}
          alt="Pablo Fuertes Ruiz"
          className="w-full h-full object-cover rounded-full shadow"
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
        <div className="flex flex-row">
          <div className="my-8">
            <a
              href="/"
              className="px-6 py-3 w-full rounded-xl mr-4 text-white bg-gradient-orange-red bg-[length:200%] bg-left transition-all duration-500 ease-in-out hover:bg-right"
            >
              Descargar CV
            </a>
          </div>
          <div className="my-8">
            <a
              href="/"
              className="px-6 py-3 w-full rounded-xl mr-4 text-white bg-transparent bg-[length:200%] transition-all duration-500 ease-in-out border hover:bg-white hover:text-black"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState } from "react";

const Project = ({ images, description, title, hasLink = "", logo, shortText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" mx-auto py-10 flex flex-col sm:flex-row ">
      <button onClick={openModal}>
        <div className="relative bg-darkGray rounded-md w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] overflow-hidden hover:opacity-70 items-center flex flex-col ">
        <img src={logo} className="absolute w-1/2 h-1/2 object-cover top-4" />

          {/* Recuadro semitransparente en la parte inferior con texto encima */}
          <div className="absolute bottom-0 w-full bg-white bg-opacity-50 rounded-b-md p-2 flex items-center justify-center h-1/3  flex-col">
          <span className="text-black z-10 font-light text-md text-justify">{shortText}</span>
            <span className="underline text-white text-xl">Pulsa para ver más!</span>
          </div>
        </div>
      </button>
      {/* Descripción del proyecto */}

      {/* Modal de galería */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-tertiary bg-opacity-75 z-50 flex justify-center items-center">
          <div className="relative w-full max-w-[900px] bg-darkGray max-h-full p-10 rounded-md overflow-auto ">
            {/* Ícono de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl bg-gradient-blue-purple rounded-full p-2 w-10 h-10 flex items-center justify-center hover:opacity-75"
            >
              &times;
            </button>

            {/* Título del modal */}
            <h1 className="text-5xl font-extrabold text-orangeColor mb-6 px-5">
              Galería
            </h1>

            {/* Galería de imágenes */}
            <div className="flex flex-wrap justify-evenly items-center gap-10">
              {images.map((photo, index) => {
                return (
                  <div
                    className="cursor-pointer w-1/4 bg-white rounded-md p-2"
                    key={index}
                    onClick={() => openModal(index)} // Permite hacer clic en cualquier foto
                  >
                    <img
                      src={photo}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-auto object-contain rounded-md"
                    />
                  </div>
                );
              })}
            </div>
            <span className="text-justify font-medium mt-6 block">{description}</span>

          </div>
        </div>
      )}
    </div>
  );
};

export default Project;

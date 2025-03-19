import React, { useState } from "react";

const Project = ({ images, description, title }) => {
  const [currentImage, setCurrentImage] = useState(0); // Estado de la imagen seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura del modal

  // Función para abrir el modal
  const openModal = (index) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para ir a la siguiente imagen en el modal
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Ciclo de imágenes
  };

  // Función para ir a la imagen anterior en el modal
  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    ); // Ciclo de imágenes
  };

  return (
    <div className="w-full mx-auto py-10 flex flex-col sm:flex-row ">
      {/* Carrusel de imágenes */}
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-5xl font-bold mb-6 uppercase bg-gradient-blue-purple bg-clip-text text-transparent text-center">
          {title}
        </h2>
        <div className="flex-col sm:flex-row flex">
        <div className="max-w-[500px] rounded-full" onClick={() => openModal(0)}>
          {/* Imagen principal */}
            <img
              src={images[0]}
              alt={`Project Image ${currentImage + 1}`}
              className=" w-[250px] h-[500px] cursor-pointer "
            />
        </div>
        <span className="flex-1 px-1 sm:px-11 py-11 sm:py-0">{description}</span>
        </div>
      </div>

      {/* Descripción del proyecto */}

      {/* Modal de galería */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-tertiary bg-opacity-75 z-50 flex justify-center items-center">
          <div className="relative w-full max-w-[900px] bg-black/100 max-h-full p-10 rounded-md overflow-auto">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;

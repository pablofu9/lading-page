
const LanguageSkill = ({ language, level }) => {
    // Generar puntos (5 en total)
    const getStars = () => {
      return [...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`inline-block w-4 h-4 rounded-full mr-1  ${
            index < level ? "bg-orangeColor" : "bg-gray-300"
          }`}
        />
      ));
    };
  
    return (
      <div className="flex flex-col">
        <div className="flex items-baseline mt-2"> {/* Usamos items-baseline para alinear todo a la misma línea base */}
          <span className="mr-3 w-[120px] font-semibold text-lg">{language}</span> {/* Agregar margen a la derecha del texto */}
          <div className="flex gap-x-2"> {/* Aquí ya no es necesario margen extra entre texto y estrellas */}
            {getStars()} {/* Muestra los puntos según el nivel */}
          </div>
        </div>
      </div>
    );
  };
  
  export default LanguageSkill;
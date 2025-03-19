import React from "react";

const TechIcon = ({ icon: Icon, name = "", color = "text-white" }) => {
  if (!Icon) return null; // Evita errores si no se pasa un icono

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <Icon size={60} className={color} />
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
};

export default TechIcon;
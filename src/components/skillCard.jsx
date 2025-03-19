import { MdWeb } from "react-icons/md";

const SkillCard = ({ text }) => {
  return (
    <div className="p-2 border text-white w-1/5 rounded-lg bg-center flex flex-col items-center justify-center">
      <MdWeb size={50} />
      <span className="text-orangeColor font-bold">{text}</span>
      <span className="font-light text-sm">
        {" "}
        Diseño y desarrollo web con React.js, Figma como herramienta de diseño,
        y trabajo con Tailwind CSS, Vite y Next.js para crear aplicaciones
        rápidas, escalables y visualmente atractivas.
      </span>
    </div>
  );
};

export default SkillCard;

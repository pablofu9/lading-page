import { FaSearch } from "react-icons/fa";
import { SiStyleshare } from "react-icons/si";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
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
    <div className="bg-black h-[100px] text-white w-full mx-auto flex justify-between items-center px-11">
      <h1 className="text-3xl font-bond ml-4 bg-clip-text text-transparent bg-gradient-orange-red pl-20 uppercase">
        Pablo Fuertes
      </h1>

      <ul className="hidden md:flex">
        <li className="p-5">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("about");
            }}
          >
            Sobre mi
          </a>
        </li>
        <li className="p-5">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("work");
            }}
          >
            Experiencia laboral
          </a>
        </li>
        <li className="p-5">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
          >
            Proyectos personales
          </a>
        </li>
        <li className="p-5">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contact");
            }}
          >
            Contáctame
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden px-2">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 "
            : "fixed left-[-100%] ease-out duration-500"
        }
      >
        <h1 className="text-3xl text-orangeColor m-4">Pablo Fuertes</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            {" "}
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
            >
              Sobre mi
            </a>
          </li>
          <li className="p-2">
            {" "}
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("work");
              }}
            >
              Experiencia laboral
            </a>
          </li>
          <li className="p-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
            >
              Contáctame
            </a>
          </li>
          <li className="p-5">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
            >
              Proyectos personales
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

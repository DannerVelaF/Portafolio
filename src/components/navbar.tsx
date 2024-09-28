import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
interface NavLinkProps {
  to: string;
  text: string;
}

export default function Navbar() {
  const [href, setHref] = useState<string>("#hero");
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    if (currentSection) {
      setHref(currentSection);
    }
  }, [currentSection]);

  const handleHref = (currentHref: string) => {
    setHref(currentHref);
  };

  const navLinks: NavLinkProps[] = [
    { to: "#hero", text: "Inicio" },
    { to: "#about", text: "Sobre mi" },
    { to: "#proyects", text: "Proyectos" },
    { to: "#contact", text: "Contactame" },
  ];
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // valida que el loader haya desaparecido para verificar el section en pantalla
    const options = {
      root: null, // ventana del navegador como viewport
      threshold: 0.1, // el 70% del elemento debe estar visible
    };

    // Verifica que section esta en el viewport y recoje su id
    const handleSectionVisible = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(`#${entry.target.id}`);
        }
      });
    };

    // Inicia el observador
    const observer = new IntersectionObserver(handleSectionVisible, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section); // Observar cada sección individualmente
    });
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Dejar de observar las secciones cuando el componente se desmonte
      });
    };
  }, []);

  return (
    <nav className="">
      {/* Desktop menu */}
      <ul className="lg:flex gap-[73px]  hidden">
        {navLinks.map((link, index) => (
          <div
            className="flex flex-col items-start lg:items-center justify-center relative"
            key={index}
          >
            <li key={index} className="">
              <a
                href={link.to}
                title={link.text}
                className={`flex gap-1 items-center justify-center transition-all ease-out ${
                  href === link.to || currentSection === link.to
                    ? "text-[#00A97F] scale-105"
                    : ""
                }`}
                onClick={() => handleHref(link.to)}
              >
                {link.text}
              </a>
            </li>
            {(href === link.to || currentSection === link.to) && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                className="before:rounded-full before:w-1 before:h-1 before:bg-[#00A97F] before:absolute before:-bottom-2 before:left-1/2 before:transform before:-translate-x-1/2 before:translate-y-0"
              ></motion.span>
            )}
          </div>
        ))}
      </ul>

      <div className="relative">
        <button
          className="w-[45px] h-[45px] flex items-center justify-center bg-[#121212] border border-[#FFFFFF]/25 rounded-xl  lg:hidden relative"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IoMenu className="w-[26px] h-[26px]" />
        </button>
        {/* {Responsive menu} */}
        {showMenu && (
          <ul className="absolute mt-3 right-0 border w-[120px] px-[12px] py-7 flex flex-col gap-2 rounded-xl backdrop-blur-lg bg-[#121212]/85">
            {navLinks.map((link, index) => (
              <div className="" key={index}>
                <li key={index} className="">
                  <a
                    href={link.to}
                    title={link.text}
                    className="flex gap-1 items-center"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <span className="lg:hidden block">{link.text}</span>
                  </a>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

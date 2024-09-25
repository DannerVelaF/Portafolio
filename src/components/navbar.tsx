import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { ReactNode, useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
interface NavLinkProps {
  to: string;
  text: string;
  icon: ReactNode;
}

interface NavbarProps {
  currentSection: string;
}

export default function Navbar({ currentSection }: NavbarProps) {
  const [href, setHref] = useState<string>("#hero");
  useEffect(() => {
    if (currentSection) {
      setHref(currentSection);
    }
  }, [currentSection]);

  const handleHref = (currentHref: string) => {
    setHref(currentHref);
  };

  const navLinks: NavLinkProps[] = [
    { to: "#hero", text: "Home", icon: <GoHome /> },
    { to: "#about", text: "About", icon: <CiUser /> },
    // Otros enlaces...
  ];
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed z-50 flex justify-center lg:items-center items-end lg:flex-row flex-col bottom-12 w-full ">
      {/* {Responsive menu} */}
      {showMenu && (
        <ul className="lg:hidden lg:w-[475px] lg:h-[70px] h-[210px] w-[110px] bg-[#1E1E1E]/50 flex lg:flex-row flex-col px-[9px] py-[12px] lg:items-center backdrop-blur-md border-[#FFFFFF]/25 border rounded-2xl lg:gap-[30px] me-5 ">
          {navLinks.map((link, index) => (
            <div
              className="flex flex-col items-start lg:items-center"
              key={index}
            >
              <li
                key={index}
                className="lg:bg-[#121212]/50 lg:backdrop-blur-md lg:w-[45px] w-[39px] h-[39px] lg:h-[45px] rounded-full lg:border-[#FFFFFF]/25 lg:border flex justify-center items-center lg:text-[35px] text-[15px] hover:text-white lg:hover:scale-150 transition-all ease-out duration-500 flex-col  relative ps-[20px] lg:ps-0"
              >
                <a
                  href={link.to}
                  title={link.text}
                  className="flex gap-1 items-center"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {link.icon}
                  <span className="lg:hidden block">{link.text}</span>
                </a>
              </li>
            </div>
          ))}
        </ul>
      )}

      {/* Desktop menu */}
      <ul className="lg:w-[475px] lg:h-[70px] h-[210px] w-[110px] bg-[#1E1E1E]/50 hidden lg:flex lg:flex-row flex-col px-[9px] py-[12px] lg:items-center backdrop-blur-md border-[#FFFFFF]/25 border rounded-2xl lg:gap-[30px] me-5 ">
        {navLinks.map((link, index) => (
          <div
            className="flex flex-col items-start lg:items-center justify-center relative"
            key={index}
          >
            <li
              key={index}
              className=" lg:bg-[#121212]/50 lg:backdrop-blur-md lg:w-[45px] w-[39px] h-[39px] lg:h-[45px] rounded-full lg:border-[#FFFFFF]/25 lg:border flex justify-center items-center lg:text-[35px] text-[15px] hover:text-white lg:hover:scale-125 transition-all ease-out duration-500 flex-col ps-[20px] lg:ps-0 z-10"
            >
              <a
                href={link.to}
                title={link.text}
                className="flex gap-1 items-center justify-center"
                onClick={() => handleHref(link.to)}
              >
                {link.icon}
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

      <button
        className="w-[45px] h-[45px] flex items-center justify-center bg-[#121212] border border-[#FFFFFF]/25 rounded-xl  lg:hidden me-[27px]"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoMenu className="w-[26px] h-[26px]" />
      </button>
    </nav>
  );
}

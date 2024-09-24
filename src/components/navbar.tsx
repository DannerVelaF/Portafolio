import { Link } from "react-scroll";

import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { ReactNode, useState } from "react";

import { IoMenu } from "react-icons/io5";
interface NavLinkProps {
  to: string;
  text: string;
  icon: ReactNode;
}

export default function Navbar() {
  const navLinks: NavLinkProps[] = [
    { to: "hero", text: "Home", icon: <GoHome /> },
    { to: "about", text: "About", icon: <CiUser /> },
    // Otros enlaces...
  ];
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="fixed flex justify-center lg:items-center items-end lg:flex-row flex-col bottom-12 w-full ">
      {showMenu && (
        <ul className="lg:w-[475px] lg:h-[70px] h-[210px] w-[110px] bg-[#1E1E1E]/50 flex lg:flex-row flex-col px-[9px] py-[12px] lg:items-center backdrop-blur-md border-[#FFFFFF]/25 border rounded-2xl lg:gap-[30px] me-5 ">
          {navLinks.map((link, index) => (
            <div
              className="flex flex-col items-start lg:items-center"
              key={index}
            >
              <li
                key={index}
                className="lg:bg-[#121212]/50 lg:backdrop-blur-md lg:w-[45px] w-[39px] h-[39px] lg:h-[45px] rounded-full lg:border-[#FFFFFF]/25 lg:border flex justify-center items-center lg:text-[35px] text-[15px] hover:text-white lg:hover:scale-150 transition-all ease-out duration-500 flex-col  relative ps-[20px] lg:ps-0"
              >
                <Link
                  to={link.to}
                  title={link.text}
                  smooth={true}
                  className="flex gap-1 items-center"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {link.icon}
                  <span className="lg:hidden block">{link.text}</span>
                </Link>
              </li>
            </div>
          ))}
        </ul>
      )}
      <button
        className="w-[45px] h-[45px] flex items-center justify-center bg-[#121212] border border-[#FFFFFF]/25 rounded-xl  lg:hidden me-[27px]"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoMenu className="w-[26px] h-[26px]" />
      </button>
    </nav>
  );
}

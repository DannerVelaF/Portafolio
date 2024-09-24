import Photo from "../assets/profile image.jpg";
import Button from "../components/button";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HeroPage() {
  return (
    <section id="hero">
      <div className=" lg:w-[75%] mx-auto flex lg:justify-between justify-center items-center min-h-full flex-col-reverse lg:flex-row gap-[32px]">
        <div className="lg:w-[777px] tracking-wider text-center lg:text-start">
          <span className="lg:text-xl text-sm">Hola, mi nombre es</span>
          <h1 className="lg:text-[64px] text-[32px] mx-0 text-[#00A97F] font-bold mt-0 mb-0 leading-tight">
            Danner Vela
          </h1>
          <h2 className="lg:text-[64px] text-[24px] text-[#CBCBCC] font-bold mt-0 mb-0 leading-tight">
            Desarrollador FullStack
          </h2>
          <p className="text-xl text-[#CBCBCC] text-pretty hidden lg:block">
            Soy estudiante de la carrera de ingeniería de sistemas e informática
            en Perú, enfocado en el desarrollo{" "}
            <strong className="text-white">
              Full stack con React y Laravel.
            </strong>
          </p>
          <div className="mt-5 flex items-center gap-10 lg:justify-start justify-center flex-col-reverse lg:flex-row">
            <Button text="Descargar Cv" />
            <div className="flex text-2xl lg:text-4xl  gap-8">
              <FaGithub className="hover:text-white transition-all ease-linear duration-200 hover:scale-105  " />
              <FaLinkedin className="hover:text-white transition-all ease-linear duration-200 hover:scale-105" />
              <FaXTwitter className="hover:text-white transition-all ease-linear duration-200 hover:scale-105" />
            </div>
          </div>
        </div>
        <img
          src={Photo}
          className="rounded-full aspect-square
lg:w-[500px] w-[300px]"
        />
      </div>
    </section>
  );
}

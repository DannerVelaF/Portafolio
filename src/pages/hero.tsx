import Button from "../components/button";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Reveal from "../lib/animation/Reveal";
export default function HeroPage() {
  return (
    <section id="hero" className="min-h-screen flex ">
      <div className="lg:w-[75%] mx-auto flex  justify-center items-center min-h-full flex-col-reverse lg:flex-row gap-[32px]">
        <div className="lg:w-[777px] tracking-wider  flex items-center flex-col gap-1">
          <Reveal direction="y">
            <span className="lg:text-xl text-lg">Hola, mi nombre es</span>
          </Reveal>
          <Reveal direction="y">
            <h1 className="lg:text-[64px] text-[32px] mx-0 text-[#00A97F] font-bold  leading-tight">
              Danner Vela
            </h1>
          </Reveal>
          <Reveal direction="y">
            <h2 className="lg:text-[64px] text-[24px] text-[#CBCBCC] font-bold  leading-tight relative">
              Desarrollador FullStack
            </h2>
          </Reveal>

          <Reveal direction="y" overflow="none">
            <div className="mt-5 flex items-center gap-10 lg:justify-start justify-center flex-col ">
              <Button text="Descargar Cv" />
              <div className="flex text-2xl lg:text-4xl  gap-8">
                <a
                  href="https://github.com/DannerVelaF"
                  title="Github"
                  target="_blank"
                >
                  <FaGithub className="hover:text-white transition-all ease-linear duration-200 hover:scale-105  " />
                </a>
                <a
                  href="https://www.linkedin.com/in/danner-alejandro-vela-fuentes-17a8b5242/"
                  title="Linkedin"
                  target="_blank"
                >
                  <FaLinkedin className="hover:text-white transition-all ease-linear duration-200 hover:scale-105" />
                </a>
                <FaXTwitter className="hover:text-white transition-all ease-linear duration-200 hover:scale-105" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

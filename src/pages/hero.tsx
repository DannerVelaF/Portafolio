import Photo from "../../public/profile.jpg";
import Button from "../components/button";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import Reveal from "../lib/Reveal";
export default function HeroPage() {
  return (
    <section id="hero">
      <div className=" lg:w-[75%] mx-auto flex lg:justify-between justify-center items-center min-h-full flex-col-reverse lg:flex-row gap-[32px]">
        <div className="lg:w-[777px] tracking-wider text-center lg:text-start">
          <Reveal>
            <span className="lg:text-xl text-lg">Hola, mi nombre es</span>
          </Reveal>
          <Reveal>
            <h1 className="lg:text-[64px] text-[32px] mx-0 text-[#00A97F] font-bold mt-0 mb-0 leading-tight">
              Danner Vela
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="lg:text-[64px] text-[24px] text-[#CBCBCC] font-bold mt-0 mb-0 leading-tight relative">
              Desarrollador FullStack
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl text-[#CBCBCC] text-pretty hidden lg:block">
              Soy estudiante de la carrera de ingeniería de sistemas e
              informática en Perú, enfocado en el desarrollo&nbsp;
              <strong className="text-white">
                Full stack con React y Laravel.
              </strong>
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-5 flex items-center gap-10 lg:justify-start justify-center flex-col-reverse lg:flex-row">
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
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            src={Photo}
            className=" aspect-square lg:w-[500px] w-[300px] animateBlob border-4 border-white/60 pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}

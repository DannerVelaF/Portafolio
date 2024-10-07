import { Projects as DataProjects } from "../lib/const/DataProjects";
import Opacity from "../lib/animation/Opacity";
import Reveal from "../lib/animation/Reveal";
import { motion } from "framer-motion";
function Projects() {
  return (
    <section id="proyects">
      <div className="lg:w-[75%] mx-auto my-32 flex flex-col space-y-10 px-12">
        <div className="flex flex-col space-y-5">
          <Reveal>
            <p className="lg:text-4xl  text-[#00A97F] font-bold text-2xl">
              Proyectos en los que he participado
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p className="lg:text-lg">
              He tenido la oportunidad de participar en varios proyectos, tanto
              académicos como personales, donde he aplicado mis habilidades para
              resolver diversas problemáticas.
            </p>
          </Reveal>
        </div>
        <div className="pt-3 grid lg:grid-cols-2 gap-10 place-items-center">
          {DataProjects.map((project, index) => (
            <Opacity delay={1 + index * 0.2} overflow="none">
              <motion.div
                key={index}
                className="lg:w-[578px] lg:h-[542px]  rounded-2xl overflow-hidden border-2 border-[#CBCBCC]/25 shadow-md bg-[#1E1E1E] transition-all ease-linear hover:border-[#00A97F]/50 hover:border-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1  }}
              >
                <img src={project.img} alt="Opemaq" className="rounded-b-2xl" />
                <div className=" lg:h-[247px] flex flex-col justify-between  p-4 lg:p-7 lg:scroll-py-0 space-y-4">
                  <p className="lg:text-xl text-sm font-bold text-white">
                    {project.title}
                  </p>
                  <p className="lg:text-[16px] text-sm font-medium">
                    {project.description}
                  </p>
                  <div className="flex justify-evenly gap-1 ">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="lg:text-[16px] text-xs bg-[#518071] text-white py-1 px-2 rounded-lg font-bold shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Opacity>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

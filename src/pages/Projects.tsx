import { Projects as DataProjects } from "../lib/const/DataProjects";
function Projects() {
  return (
    <section id="proyects">
      <div className="lg:w-[75%] mx-auto py-36 flex flex-col space-y-10">
        <div className="flex flex-col space-y-2">
          <p className="lg:text-4xl text-[#00A97F] font-bold">
            Proyectos en los que he participado
          </p>
          <p className="lg:text-lg">
            He tenido la oportunidad de participar en varios proyectos, tanto
            académicos como personales, donde he aplicado mis habilidades para
            resolver diversas problemáticas.
          </p>
        </div>
        <div className="pt-3 grid grid-cols-2 gap-10 place-items-center">
          {DataProjects.map((project, index) => (
            <div
              key={index}
              className="lg:w-[578px] lg:h-[542px] rounded-2xl overflow-hidden border-2 border-[#CBCBCC]/25 shadow-md bg-[#1E1E1E] transition-all ease-linear duration-200 cards"
            >
              <img src={project.img} alt="Opemaq" className="rounded-b-2xl" />
              <div className="lg:p-7 lg:h-[247px] flex flex-col justify-between">
                <p className="text-xl font-bold">{project.title}</p>
                <p className="text-[16px] font-medium">{project.description}</p>
                <div className="flex justify-between ">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[16px] font-medium bg-[#518071] py-1 px-3 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

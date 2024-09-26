import Reveal from "../lib/animation/Reveal";

function About() {
  return (
    <section id="about">
      <div className="w-[75%] mx-auto pt-44">
        <h1 className=" mx-auto lg:text-4xl text-[#00A97F] font-bold block ">
          Acerca de mi
        </h1>
        <div className=" mx-auto items-center flex ">
          <div className="text-xl py-[51px]">
            <Reveal>
              <p>
                Estudiante universitario de la carrera de ingeniería de sistemas
                e informática en Perú. Mi interés se centra principalmente en el
                desarrollo&nbsp;
                <strong className="text-white font-bold">
                  Fullstack con React y Laravel.
                </strong>
              </p>
            </Reveal>
            <Reveal>
              <p>
                A lo largo de mi trayecto universitario he liderado diversos
                proyectos académicos, donde&nbsp;
                <strong className="text-white font-bold">
                  he desarrollado aplicaciones web completas que abarcan desde
                  interfaces dinámicas con ReactJs, implementación y conexión
                  con APis e integrando tecnologías como bases de datos con SQL.
                </strong>
              </p>
            </Reveal>
            <Reveal>
              <p>
                Me gusta crear cosas nuevas para la web y me esfuerzo en mejorar
                continuamente mis habilidades, explorando nuevas herramientas y
                tecnologías que un ayuden en mi desarrollo del dia a dia.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

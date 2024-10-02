import Photo from "../../public/profile.jpg";
import Opacity from "../lib/animation/Opacity";
import Reveal from "../lib/animation/Reveal";
function About() {
  return (
    <section id="about">
      <div className="lg:w-[75%] mx-auto pt-36 ">
        <div className="flex justify-center">
          <Reveal>
            <h1 className="text-4xl text-[#00A97F] font-bold relative text-center">
              Acerca de mi
            </h1>
          </Reveal>
        </div>

        <div className="mt-12 px-12 grid grid-rows-2 lg:grid-rows-none gap-8 lg:grid-cols-2 place-items-center lg:items-center justify-between">
          <div className="lg:text-xl text-sm text-wrap">
            <Reveal delay={0.8}>
              <p className="mb-2">
                Soy estudiante universitario de la carrera de ingeniería de
                sistemas e informática en Perú. Mi interés se centra
                principalmente en el&nbsp;
                <b className="text-white">
                  desarrollo Fullstack con React y Laravel.
                </b>
              </p>
            </Reveal>
            <Reveal delay={0.9}>
              <p className="mb-2">
                A lo largo de mi trayecto universitario he desarrollado diversos
                proyectos personales y académicos, donde&nbsp;
                <b className="text-white">
                  he desarrollado aplicaciones web completas
                </b>
                &nbsp;que abarcan desde&nbsp;
                <b className="text-white">interfaces dinámicas con ReactJs </b>
                ,&nbsp;
                <b className="text-white">
                  conexión con la parte del backend
                </b>{" "}
                y otras tecnologías.&nbsp;
                <b className="text-white">
                  Integrando tecnologías como bases SQL.
                </b>
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p>
                Estoy abierto a nuevas oportunidades de trabajo donde pueda
                contribuir y aprender cosas nuevas en mi vida profesional.
              </p>
            </Reveal>
          </div>
          <Opacity delay={1.3}>
            <img
              src={Photo}
              alt="Danner Vela Photo"
              className=" aspect-square lg:w-[500px] w-[300px] animateBlob border-4 border-white/60 pointer-events-none"
            />
          </Opacity>
        </div>
      </div>
    </section>
  );
}

export default About;

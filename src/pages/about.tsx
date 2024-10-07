import Photo from "../../public/profile.jpg";
import Opacity from "../lib/animation/Opacity";
import Reveal from "../lib/animation/Reveal";
function About() {
  return (
    <section
      id="about"
      className="lg:flex lg:items-center my-20 lg:mt-0 lg:mask-gradient"
    >
      <div className="lg:w-[75%] mx-auto mt-32 lg:mt-0">
        <div className=" px-12 grid grid-rows-2 lg:grid-rows-none gap-8 lg:grid-cols-2 place-items-center lg:items-center justify-between">
          <div className="lg:text-xl text-sm text-wrap">
            <Reveal>
              <h1 className="lg:text-4xl text-2xl text-[#00A97F] font-bold relative text-center">
                Acerca de mi
              </h1>
            </Reveal>
            <Reveal delay={0.7}>
              <p className="mb-2 mt-4">
                Soy estudiante universitario de la carrera de ingeniería de
                sistemas e informática en Perú. Mi interés se centra
                principalmente en el&nbsp;
                <b className="text-white">
                  desarrollo Fullstack con React y Laravel.
                </b>
              </p>
            </Reveal>
            <Reveal delay={0.8}>
              <p className="mb-2">
                A lo largo de mi trayecto universitario he desarrollado diversos
                proyectos personales y académicos, donde&nbsp;
                <b className="text-white">
                  he desarrollado aplicaciones web completas
                </b>
                &nbsp;que abarcan desde&nbsp;
                <b className="text-white">interfaces dinámicas con ReactJs,</b>
                &nbsp;
                <b className="text-white">
                  conexión con la parte del backend
                </b>{" "}
                y otras tecnologías.&nbsp;
                <b className="text-white">
                  Integrando tecnologías como bases SQL.
                </b>
              </p>
            </Reveal>
            <Reveal delay={0.9}>
              <p>
                Estoy abierto a nuevas oportunidades de trabajo donde pueda
                contribuir y aprender cosas nuevas en mi vida profesional.
              </p>
            </Reveal>
          </div>
          <Opacity delay={1.2}>
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

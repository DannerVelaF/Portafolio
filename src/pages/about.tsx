import Photo from "../../public/profile.jpg";
// import Reveal from "../lib/animation/Reveal";
function About() {
  return (
    <section id="about">
      <div className="lg:w-[75%] mx-auto pt-36 ">
        <div className="relative">
          <h1 className="text-4xl text-[#00A97F] font-bold relative text-center">
            Acerca de mi
          </h1>
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-[50px] h-1 bg-[#00A97F]"></span>
        </div>

        <div className="mt-12 px-12 grid grid-rows-2 lg:grid-rows-none gap-8 lg:grid-cols-2 place-items-center lg:items-center justify-between">
          <div className="lg:text-xl text-sm text-wrap">
            <p className="mb-2">
              Soy estudiante universitario de la carrera de ingeniería de
              sistemas e informática en Perú. Mi interés se centra
              principalmente en el&nbsp;
              <b className="text-white">
                desarrollo Fullstack con React y Laravel.
              </b>
            </p>
            <p className="mb-2">
              A lo largo de mi trayecto universitario he desarrollado diversos
              proyectos personales y académicos, donde&nbsp;
              <b className="text-white">
                he desarrollado aplicaciones web completas
              </b>
              &nbsp;que abarcan desde&nbsp;
              <b className="text-white">interfaces dinámicas con ReactJs </b>
              ,&nbsp;
              <b className="text-white">conexión con la parte del backend</b> y
              otras tecnologías.&nbsp;
              <b className="text-white">
                Integrando tecnologías como bases SQL.
              </b>
            </p>
            <p>
              Estoy abierto a nuevas oportunidades de trabajo donde pueda
              contribuir y aprender cosas nuevas en mi vida profesional.
            </p>
          </div>
          <img
            src={Photo}
            alt="Danner Vela Photo"
            className=" aspect-square lg:w-[500px] w-[300px] animateBlob border-4 border-white/60 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

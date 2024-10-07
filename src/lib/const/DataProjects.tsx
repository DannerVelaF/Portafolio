import { ReactNode } from "react";
import Montezor from "../../../public/montezor.png";
import Opemaq from "../../../public/opemaq.png";
interface Project {
  img: string;
  title: string;
  description: ReactNode;
  technologies: string[];
  link: string;
}

export const Projects: Project[] = [
  {
    img: Opemaq,
    title: "Opemaq Construye EIRL",
    description: (
      <>
        Se desarrolló un sistema para gestionar el alquiler de maquinaria
        pesada, donde me encargué de crear la interfaz de usuario con{" "}
        <b className="text-white">ReactJs</b> y{" "}
        <b className="text-white">TailwindCss</b>. Implementé módulos para
        almacenar información y un dashboard que resume los datos registrados en
        el backend.
      </>
    ),
    technologies: ["ReactJs", "Html", "Css", "JavaScript", "TailwindCss"],
    link: "",
  },
  {
    img: Montezor,
    title: "Boticas Montezor",
    description: (
      <>
        Sistema desarrolador para una botica que permite gestionar operaciones
        como la administración de productos y ventas. Desarrollé módulos con{" "}
        <b className="text-white">ReactJs</b> y{" "}
        <b className="text-white">TailwindCss</b>, incluyendo un dashboard con
        métricas clave y un apartado de ventas.
      </>
    ),
    technologies: ["ReactJs", "Html", "Css", "JavaScript", "TailwindCss"],
    link: "",
  },
];

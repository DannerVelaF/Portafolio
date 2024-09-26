import HeroPage from "./pages/hero";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import Header from "./components/Header";
export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    setInterval(() => {
      setShowLoader(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // valida que el loader haya desaparecido para verificar el section en pantalla
    if (!showLoader) {
      const options = {
        root: null, // ventana del navegador como viewport
        threshold: 0.1, // el 70% del elemento debe estar visible
      };

      // Verifica que section esta en el viewport y recoje su id
      const handleSectionVisible = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(`#${entry.target.id}`);
          }
        });
      };

      // Inicia el observador
      const observer = new IntersectionObserver(handleSectionVisible, options);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        observer.observe(section); // Observar cada sección individualmente
      });
      return () => {
        sections.forEach((section) => {
          observer.unobserve(section); // Dejar de observar las secciones cuando el componente se desmonte
        });
      };
    }
  }, [showLoader]);

  if (showLoader) return <Loader />;

  return (
    <div className="h-screen flex flex-col relative">
      <Header />
      <Navbar currentSection={currentSection} />
      <main className="h-full flex-1">
        <HeroPage />
        <About />
      </main>
    </div>
  );
}

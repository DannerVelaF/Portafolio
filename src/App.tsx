import HeroPage from "./pages/hero";
import About from "./pages/about";
import Projects from "./pages/Projects";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import Header from "./components/Header";
export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowLoader(false);
    }, 1500);
  }, []);

  if (showLoader) return <Loader />;

  return (
    <div className="h-screen flex flex-col relative">
      <Header />
      <main className="h-full flex-1 flex flex-col">
        <HeroPage />
        <About />
        <Projects />
      </main>
    </div>
  );
}

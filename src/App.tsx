import HeroPage from "./pages/hero";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
export default function App() {
  const logoWeb = "<Danner.dev/>";
  const logoMobile = "</>";

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

  if (showLoader) return <Loader />;

  return (
    <div className="h-screen flex flex-col relative">
      <header className="fixed lg:px-[80px] px-[46px] py-[40px] flex justify-between items-center top-0 left-0">
        {/* Logo para pantallas grandes */}
        <a
          href="#"
          className="text-2xl font-bold hover:text-[#fafafa] transition-all ease-in lg:block hidden"
        >
          {logoWeb}
        </a>

        {/* Logo para pantallas pequeñas */}
        <a
          href="#"
          className="text-2xl font-bold hover:text-[#fafafa] transition-all ease-in lg:hidden block"
        >
          {logoMobile}
        </a>
      </header>
      <Navbar />
      <main className=" h-full flex-1">
        <HeroPage />
        <About />
      </main>
    </div>
  );
}

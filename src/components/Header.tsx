import Navbar from "./navbar";

function Header() {
  const logo = "</>";
  return (
    <header className="w-full flex justify-between backdrop-blur-lg bg-[#121212]/5  z-20 fixed lg:px-[80px] px-[46px] py-[30px] top-0 left-0">
      <div className="">
        {/* Logo para pantallas pequeñas */}
        <a
          href="#"
          className="text-2xl font-bold hover:text-[#fafafa] transition-all ease-in block"
        >
          {logo}
        </a>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;

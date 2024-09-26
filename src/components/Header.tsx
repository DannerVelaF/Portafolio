
function Header() {
  const logoWeb = "<Danner.dev/>";
  const logoMobile = "</>";
  return (
    <header className="w-full backdrop-blur-lg bg-[#121212]/5 z-20 fixed lg:px-[80px] px-[46px] py-[40px] flex justify-between items-center top-0 left-0">
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
  );
}

export default Header;

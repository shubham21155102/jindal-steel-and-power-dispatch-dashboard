import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navbarGlass = {
  background: "rgba(0, 0, 25, 0.3)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(16.5px)",
  WebkitBackdropFilter: "blur(16.5px)",
};

const logoLeftPadding = {
  paddingLeft: "15rem",
};
const Header = () => {


  const [menuState, setMenuState] = useState(false);
  const handleMenu = () => {
    setMenuState(!menuState);

  };

  return (
    <>
      <div
        className="container-header flex flex-row h-20 fixed left-0 right-0 z-50 top-0"
        style={navbarGlass}
      >
        <Image src="/jspl_logo.svg" width={100} height={100} alt="i" />
        <Link href="/">
          <div
            className="fmcw-logo-header place-self-center z-100"
            style={logoLeftPadding}
          ></div>
        </Link>
        <div className="links-container-header flex justify-end flex-row basis-5/6">
          <Link
            href="/events"
            className="nav-menu links-header mr-8  place-self-center"
          >
            finance
          </Link>
          <Link
            href="/workshops"
            className="nav-menu links-header mr-8  place-self-center"
          >
          administration
          </Link>

          <Link
            href="/glimpses"
            className="nav-menu links-header mr-8  place-self-center "
          >
            management
          </Link>
          <Link
            href="/team"
            className="nav-menu links-header mr-8  place-self-center"
          >
            team
          </Link>
          <Link
            href="/faq"
            className="nav-menu links-header mr-8  place-self-center"
          >
            faq
          </Link>
          <div
            className=" links-header w-auto pr-4 place-self-center"
          >
            <button onClick={handleMenu}>
              {menuState ? null : (
                <div className="menu-link space-y-1">
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-8 h-0.5 bg-white"></div>
                  <div className="w-8 h-0.5 bg-white"></div>
                </div>
              )}
            </button>
           
          </div>
         
        </div>
      </div>
    </>
  );
};
export default Header;
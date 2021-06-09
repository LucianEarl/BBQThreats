import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavButton from "../components/NavButton";
import LucianFace from "../media/images/lucian.jpg";

import MobileMenu from "../media/icons/hamburgerMenu.svg";
import MobileClose from "../media/icons/hamburgerX.svg";

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const toggleMenu = () =>
    // the function to change the hamburger menu to a cross and vice versa
    setMenuStatus(!menuStatus);
  let menuButton = <img src={MobileMenu} alt="" />;
  let navHeader = "flex flex-wrap h-1/6 w-screen";
  if (menuStatus) {
    menuButton = <img src={MobileClose} alt="" />; // needs to appear when the menu is open
    navHeader = "flex flex-wrap w-screen h-1/6 fixed z-20";
  } else {
    menuButton = <img src={MobileMenu} alt="" />;
    navHeader = "flex flex-wrap w-screen h-1/6";
  }
  return (
    <div>
      <nav className="md:hidden">
        <section className={navHeader}>
          <Link className="text-white w-5/6 text-4xl" to="/">
            BBQ
            <br />
            THREATS.com
          </Link>
          <article
            onClick={toggleMenu}
            className="w-1/6 text-center justify-items-center content-center justify-center md:hidden"
          >
            {menuButton}
          </article>
        </section>
        <ul
          className={
            menuStatus // hide content when the menu is toggled on mobile
              ? "flex flex-col text-center h-full top-0 z-0 fixed bg-background w-full md:flex-row justify-evenly"
              : "hidden md:flex md:text-center md:justify-evenly md:items-center"
          }
        >
          <li>
            <NavButton pageLink="/" closeMenu={toggleMenu} buttonText="Home" />
          </li>
          <li>
            <NavButton
              pageLink="/Lucian"
              closeMenu={toggleMenu}
              buttonText="Lucian Earl"
              backgroundPic={LucianFace}
            />
          </li>
          <li>
            <NavButton
              pageLink="/Tim"
              closeMenu={toggleMenu}
              buttonText="Tim Whatley"
              backgroundPic={LucianFace}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

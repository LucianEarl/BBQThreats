import React, { useState } from "react";
import { Link } from "react-router-dom";

import MobileMenu from "../media/icons/hamburgerMenu.svg";
import MobileClose from "../media/icons/hamburgerX.svg";

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(false);
  const toggleMenu = () =>
    // the function to change the hamburger menu to a cross and vice versa
    setMenuStatus(!menuStatus);
  let menuButton = <img src={MobileMenu} alt="" />;
  if (menuStatus) {
    menuButton = <img src={MobileClose} alt="" />;
  } else {
    menuButton = <img src={MobileMenu} alt="" />;
  }
  return (
    <div>
      <nav className="flex">
        <Link className="text-white w-2/3 text-4xl" to="/">
          BBQ THREATS.com
        </Link>
        <section onClick={toggleMenu} className="w-1/3">
          {menuButton}
        </section>
        <ul
          className={
            menuStatus
              ? "flex flex-col text-center w-full md:flex-row md:justify-evenly"
              : "hidden md:flex md:text-center md:justify-evenly md:items-center"
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Lucian">Lucian</Link>
          </li>
          <li>
            <Link to="/Tim">Tim</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

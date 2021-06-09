import React from "react";
import { Link } from "react-router-dom";

function NavButton({ buttonText, pageLink, closeMenu }) {
  //the buttons in the nav that link to other pages, and close the mobile menu
  return (
    <Link
      // where the button routes to
      to={pageLink}
      onClick={closeMenu}
      className="text-white bg-green-500 text-6xl"
    >
      {/* the text inside the button */}
      {buttonText}
    </Link>
  );
}

export default NavButton;

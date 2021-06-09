import React from "react";
import { Link } from "react-router-dom";

function NavButton({ buttonText, pageLink, closeMenu, backgroundPic }) {
  //the buttons in the nav that link to other pages, and close the mobile menu
  let bgImage = <></>;
  if (backgroundPic) {
    bgImage = (
      <img
        src={backgroundPic}
        className="w-screen fixed z-10 object-cover h-36"
        alt={buttonText}
      />
    );
  }
  return (
    <Link
      // where the button routes to
      to={pageLink}
      onClick={closeMenu}
      className="text-white font-righteous text-6xl w-screen"
    >
      {bgImage}
      <p className="flex w-screen h-36 relative justify-center items-center z-20">
        {/* the text inside the button */}
        {buttonText}
      </p>
    </Link>
  );
}

export default NavButton;

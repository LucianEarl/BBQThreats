import React from "react";
import { Link } from "react-router-dom";

function HomeButton(props) {
  // props for using buttons on Home page, name/image for person and link for route
  const { name, image, link } = props;

  return (
    <div className=" w-1/2 m-3 flex content-center items-center justify-center">
      <Link
        className="p-2 hover:border-black hover:font-black active:border-black active:font-black flex flex-col items-center justify-center"
        to={link}
      >
        <img
          src={image}
          alt=""
          className="max-w-14 max-h-14 min-w-12 min-h-12 rounded-full border-white border-4 m-2"
        />
        <h2>{name}</h2>
      </Link>
    </div>
  );
}

export default HomeButton;

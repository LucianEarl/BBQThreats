import React from "react";

// component to be called for logos on portfolio page
function LogoComponent(props) {
  // set props to be called in from parent
  const { link, name, image } = props;

  return (
    <div className="w-10 m-2">
      <a href={link} target="_blank" rel="noreferrer">
        <h2 className="text-xs">{name}</h2>
        <img
          src={image}
          alt=""
          className="bg-white rounded-full border-white border-2"
        />
      </a>
    </div>
  );
}

export default LogoComponent;

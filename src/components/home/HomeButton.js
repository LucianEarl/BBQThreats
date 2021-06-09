import React from "react";

function HomeButton(props) {
  const { name, image } = props;

  return (
    <div className="container justify-items-center place-items-center w-1/2">
      <button className="p-2">
        <img
          src={image}
          alt=""
          className="max-w-14 max-h-14 min-w-12 min-h-12 rounded-full border-white border-4 m-2"
        />
        {name}
      </button>
    </div>
  );
}

export default HomeButton;

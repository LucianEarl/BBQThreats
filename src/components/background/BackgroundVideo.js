import React from "react";

import poster from "../../media/images/videoPosters/HomePoster.png";

// provides video for Background and styling
function BackgroundVideo(props) {
  // sets prop for calling component in parent
  const { video } = props;

  return (
    <video
      className="absolute z-negative1 min-h-none min-w-screen max-w-7xl sm:max-w-none"
      autoPlay
      loop
      muted
      poster={poster}
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  );
}

export default BackgroundVideo;

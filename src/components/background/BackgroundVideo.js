import React from "react";

// provides video for Background and styling
function BackgroundVideo(props) {
  // sets prop for calling component in parent
  const { video, poster } = props;

  return (
    <video
      className="absolute z-negative1 w-screen h-screen object-cover"
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

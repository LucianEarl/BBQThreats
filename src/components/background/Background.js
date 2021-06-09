import React from "react";

import BackgroundVideo from "./BackgroundVideo.js";

function Background({ BackgroundData }) {
  // will call from background Data depending on which page you are on, is called from each page
  return (
    <div className="fixed object-cover bg-night h-full w-full top-0 left-0 z-negative1">
      <div className="fixed w-screen">
        {BackgroundData.video && BackgroundData.poster !== "" ? (
          <BackgroundVideo
            video={BackgroundData.video}
            poster={BackgroundData.poster}
          />
        ) : undefined}
      </div>
    </div>
  );
}

export default Background;

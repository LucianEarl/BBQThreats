import React from "react";

import Background from "../components/background/Background";
import BackgroundData from "../components/background/BackgroundData";

function Home() {
  return (
    <div className="">
      <Background BackgroundData={BackgroundData[0]} />
    </div>
  );
}

export default Home;

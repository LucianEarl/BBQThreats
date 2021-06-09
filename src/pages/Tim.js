import React from "react";

// imported components
import Background from "../components/background/Background";
import backgroundData from "../components/background/BackgroundData";
import LogoComponent from "../components/portfolio/LogoComponent";

//imported images
import githubLogo from "../media/images/logos/GitHub-Mark-120px-plus.png";

function Tim() {
  return (
    <div className="bg-background bg-opacity-40 h-screen w-screen mx-auto text-center flex flex-col">
      <section className="text-white font-righteous flex flex-wrap-reverse">
        <LogoComponent
          image={githubLogo}
          name={"Github"}
          link={"https://github.com/Lyderies"}
        />
        <article>
          <h2 className="text-5xl p-6">Tim Whatley</h2>
          <p>Welcome to my résumé</p>
        </article>
      </section>
      <Background BackgroundData={backgroundData[1]} />
    </div>
  );
}

export default Tim;

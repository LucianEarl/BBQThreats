import React from "react";

// imported components
import Background from "../components/background/Background";
import backgroundData from "../components/background/BackgroundData";
import LogoComponent from "../components/portfolio/LogoComponent";

//imported images
import githubLogo from "../media/images/logos/GitHub-Mark-120px-plus.png";
import linkedinLogo from "../media/images/logos/LI-In-Bug.png";

function Tim() {
  return (
    <div className="bg-background bg-opacity-40 h-screen w-screen mx-auto text-center flex flex-col">
      <section className="flex flex-row w-full px-2">
        <article className="flex justify-start w-1/2">
          <LogoComponent
            image={githubLogo}
            name={"Github"}
            link={"https://github.com/Lyderies"}
          />
        </article>
        <article className="flex justify-end w-1/2">
          <LogoComponent
            image={linkedinLogo}
            name={"Linkedin"}
            link={"https://www.linkedin.com/in/tim-whatley-2b3aa818b"}
          />
        </article>
      </section>
      <section className="text-white font-righteous flex flex-wrap-reverse">
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

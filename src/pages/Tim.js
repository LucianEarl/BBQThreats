import React from "react";

// imported components
import Background from "../components/background/Background";
import backgroundData from "../components/background/BackgroundData";
import LogoComponent from "../components/portfolio/LogoComponent";

//imported images
import githubLogo from "../media/images/logos/GitHub-Mark-120px-plus.png";
import linkedinLogo from "../media/images/logos/LI-In-Bug.png";
import timImage from "../media/images/tim.jpg";

function Tim() {
  return (
    <div className="bg-background bg-opacity-40 h-screen w-screen mx-auto text-center flex flex-col overflow-scroll font-righteous text-white">
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
      <section className="text-white font-righteous flex flex-wrap-reverse w-full">
        <article className="flex flex-wrap justify-center">
          <h2 className="text-5xl p-6">Tim Whatley</h2>
          <p>Welcome to my résumé</p>
        </article>
        <article className="flex justify-center w-full">
          <img
            src={timImage}
            alt=""
            className=" w-15 h-15 border-white border-2 rounded-full"
          />
        </article>
      </section>
      <div className="flex flex-col">
        <section>
          <article>
            <h2>What I am about?</h2>
            <p>This is where I describe myself</p>
          </article>
          <article>
            <h2>Portfolio</h2>
            <a
              href="https://www.daisylake.co.nz/"
              target="_blank"
              rel="noreferrer"
            >
              Daisy Lake
            </a>
            <a
              href="https://www.clothnz.co.nz/"
              target="_blank"
              rel="noreferrer"
            >
              Cloth Commercial Textiles
            </a>
            <a
              href="https://www.starrynights.co.nz/"
              target="_blank"
              rel="noreferrer"
            >
              Starry Nights
            </a>
          </article>
        </section>
        <section>
          <article>
            <h2>Skills</h2>
          </article>
          <article>
            <h2>Frontend</h2>
            <ul>
              <li>HTML/CSS</li>
              <li>TailwindCss</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Python</li>
            </ul>
          </article>
          <article>
            <h2>Backend</h2>
            <ul>
              <li>SQL</li>
              <li>MySQL</li>
              <li>NodeJS(Express)</li>
            </ul>
          </article>
        </section>
        <section>
          <article>
            <h2>My Qualifications</h2>
          </article>
          <article>
            <ul>
              <li>
                Whitecliffe College of Art and Technology (2019-2021)
                <ul>
                  <li>Diploma of Software Development (Level 6)</li>
                </ul>
              </li>
              <li>
                NZ Healthcare & Disability (2018-2021)
                <ul>
                  <li>MAPA Certification</li>
                  <li>MySkill Level 3 Positive Behaviour Support (US 23388)</li>
                  <li>Personal Cares (US 23386, Level 3)</li>
                  <li>Certificate in First Aid</li>
                </ul>
              </li>
              <li>
                Unitec Institute of Technology (2009)
                <ul>
                  <li>Certificate in Applied Technology (Carpentry)</li>
                </ul>
              </li>
              <li>Parnell College (2008)</li>
            </ul>
          </article>
        </section>
        <section>
          <article>
            <h2>My Experience</h2>
          </article>
          <article>
            <h2>Daisy Lake</h2>
            <p>That goes here</p>
          </article>
          <article>
            <h2>Divers</h2>
            <p>That goes here</p>
          </article>
          <article>
            <h2>NZ Healthcare & Disability</h2>
            <p>That goes here</p>
          </article>
          <article>
            <h2>Cloth Commercial Textiles</h2>
            <p>That goes here</p>
          </article>
          <article>
            <h2>Peter McKay Architecture</h2>
            <p>That goes here</p>
          </article>
          <article>
            <h2>Janet McVeagh Recreation</h2>
            <p>That goes here</p>
          </article>
        </section>
      </div>
      <Background BackgroundData={backgroundData[1]} />
    </div>
  );
}

export default Tim;

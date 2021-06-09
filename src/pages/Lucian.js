import React from "react";

// Home background components
import Background from "../components/background/Background";
import BackgroundData from "../components/background/BackgroundData";

import LogoComponent from "../components/portfolio/LogoComponent";

//imported images
import githubLogo from "../media/images/logos/GitHub-Mark-120px-plus.png";
import linkedinLogo from "../media/images/logos/LI-In-Bug.png";
import Pic from "../media/images/lucian.jpg";

function Lucian() {
  return (
    <div className="bg-opacity-40 bg-black">
      <section className="flex flex-wrap">
        <article className="md:w-2/3 text-center">
          <h1 className="text-white text-8xl md:text-9xl font-bodoni">
            Lucian Earl
          </h1>
        </article>
        <img
          src={Pic}
          className="md:w-1/3 p-5 rounded-full md:p-0 md:border-white md:border-8"
          alt="A dashing young man"
        />
        <section className="flex flex-row w-full px-2">
          <article className="flex justify-start w-1/2">
            <LogoComponent
              image={githubLogo}
              name={"Github"}
              link={"https://github.com/LucianEarl"}
            />
          </article>
          <article className="flex justify-end w-1/2">
            <LogoComponent
              image={linkedinLogo}
              name={"Linkedin"}
              link={"https://www.linkedin.com/in/lucianearl/"}
            />
          </article>
        </section>
        <section className="text-white text-center w-full font-bodoni px-4">
          <article>
            <h1 className="text-5xl pt-10 pb-5">Who am I?</h1>
            <p>
              I'm a gradute who is passionate about software development, always
              eager to learn new skills and solve new problems. I have
              experience in just about every aspect of software, particularly in
              web development.
            </p>
          </article>
          <article>
            <h1 className="text-5xl pt-10 pb-5">Portfolio</h1>
            <p>
              Though I am relatively new to the development industry, I do have
              several live client sites I am proud to show:
            </p>
            <ul className="underline text-lg">
              <li>
                <a href="starrynights.co.nz" target="_blank" rel="noreferrer">
                  StarryNights.co.nz
                </a>
              </li>

              <li>
                <a href="clothNZ.co.nz" target="_blank" rel="noreferrer">
                  ClothNZ.co.nz
                </a>
              </li>
              <li>
                <a href="daisylake.co.nz" target="_blank" rel="noreferrer">
                  DaisyLake.co.nz
                </a>
              </li>
            </ul>
          </article>
          <article>
            <h1 className="text-5xl pt-10 pb-5">Skills</h1>
            <p>I am a man, allegedly. Lorem epsum, etc.</p>
          </article>
          <article>
            <h1 className="text-5xl pt-10 pb-5">Qualifications</h1>
            <h2 className="text-2xl">NZ Diploma in Software Development</h2>
            <p>Whitecliffe College of Arts and Technology, 2021</p>
            <br />
            <h2 className="text-2xl">
              Bachelor's Degree in Biological Sciences (Endorsed in Ecology)
            </h2>
            <p>University of Canterbury, 2018</p>
          </article>
          <article>
            <h1 className="text-5xl pt-10 pb-5">Work Experience</h1>
            <ul>
              <li>
                <h2>Director - Daisy Lake</h2>
                <p>
                  During my studies I started a business with a friend, and we
                  designed, developed and deployed several websites for clients.
                </p>
              </li>
            </ul>
          </article>
        </section>
      </section>
      <Background BackgroundData={BackgroundData[2]} />
    </div>
  );
}

export default Lucian;

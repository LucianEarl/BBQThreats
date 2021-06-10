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
    <div className="bg-opacity-40 bg-black absolute pt-1/4 md:pt-0 w-full md:overflow-x-hidden">
      <section className="flex flex-wrap md:overflow-x-hidden">
        <div className="md:flex md:justify-evenly md:w-full">
          <article className=" flex items-center text-center justify-center md:w-auto">
            <h1 className="text-white text-center text-6xl sm:text-8xl md:text-9xl font-bodoni ">
              Lucian Earl
            </h1>
          </article>
          <img
            src={Pic}
            className="md:w-1/3 p-5 rounded-full md:p-0 md:border-white md:border-8 md:flex md:items-center md:justify-center"
            alt="A dashing young man"
          />
        </div>
        <section className="flex flex-row w-full md:justify-evenly">
          <article className="flex justify-start w-1/2 md:w-auto md:block">
            <LogoComponent
              image={githubLogo}
              name={"Github"}
              link={"https://github.com/LucianEarl"}
            />
          </article>
          <article className="flex justify-end w-1/2 md:w-auto md:block">
            <LogoComponent
              image={linkedinLogo}
              name={"Linkedin"}
              link={"https://www.linkedin.com/in/lucianearl/"}
            />
          </article>
        </section>
        <section className="text-white text-center w-full font-bodoni px-4 md:px-0 md:flex md:flex-col">
          <article className="md:pb-10 md:flex md:w-full ">
            <h1 className="text-4xl sm:text-5xl pt-10 pb-5 md:w-2/5">
              Who am I?
            </h1>
            <p className="md:w-3/5 md:px-10">
              I'm a gradute who is passionate about software development, always
              eager to learn new skills and solve new problems. I have
              experience in just about every aspect of software, particularly in
              web development. I'm a gradute who is passionate about software
              development, always eager to learn new skills and solve new
              problems. I have experience in just about every aspect of
              software, particularly in web development. I'm a gradute who is
              passionate about software development, always eager to learn new
              skills and solve new problems. I have experience in just about
              every aspect of software, particularly in web development.
            </p>
          </article>
          <article className="md:pb-10 md:flex md:w-full">
            <h1 className="text-4xl sm:text-5xl pt-10 pb-5 md:w-2/5">
              Portfolio:
            </h1>
            <section className="md:w-3/5 md:px-10">
              <p className="mb-3">
                Though I am relatively new to the development industry, I do
                have several live client sites I am proud to show off:
              </p>
              <ul className="underline text-xl">
                <li className="mb-3">
                  <a href="starrynights.co.nz" target="_blank" rel="noreferrer">
                    StarryNights.co.nz
                  </a>
                </li>

                <li className="mb-3">
                  <a href="clothNZ.co.nz" target="_blank" rel="noreferrer">
                    ClothNZ.co.nz
                  </a>
                </li>
                <li className="mb-3">
                  <a href="daisylake.co.nz" target="_blank" rel="noreferrer">
                    DaisyLake.co.nz
                  </a>
                </li>
                <li>
                  <a href="bbqthreats.co.nz" target="_blank" rel="noreferrer">
                    BBQThreats.co.nz
                  </a>
                </li>
              </ul>
            </section>
          </article>
          <article className="md:pb-10 md:flex md:w-full">
            <h1 className="text-4xl sm:text-5xl pt-10 pb-5 md:w-2/5">
              Skills:
            </h1>
            <p className="md:w-3/5 md:px-10">
              I am a man, allegedly. Lorem epsum, etc.
            </p>
          </article>
          <article className="md:pb-10 md:flex md:w-full">
            <h1 className="text-4xl sm:text-5xl pt-10 pb-5 md:w-2/5">
              Qualifications:
            </h1>
            <ul className="md:px-10 md:w-3/5">
              <li>
                <h2 className="text-2xl font-bold">
                  NZ Diploma in Software Development
                </h2>
                <p>Whitecliffe College of Arts and Technology, 2021</p>
              </li>
              <li>
                <h2 className="text-2xl font-bold">
                  Bachelor's Degree in Biological Sciences (Endorsed in Ecology)
                </h2>
                <p>University of Canterbury, 2018</p>
              </li>
            </ul>
          </article>
          <article className="md:pb-10 md:flex md:w-full pb-10">
            <h1 className="text-4xl sm:text-5xl pt-10 pb-5 md:w-2/5">
              Work Experience:
            </h1>
            <ul className="md:w-3/5 md:px-10">
              <li>
                <h2 className="text-2xl font-bold">Director - Daisy Lake</h2>
                <p>
                  During my studies I started a business with a friend, and we
                  designed, developed and deployed several websites for clients.
                </p>
              </li>
              <li>
                <h2 className="text-2xl font-bold">
                  Hardware Assistant - Divers Group
                </h2>
                <p>Casual work installing hardware and setting up offices</p>
              </li>
              <li>
                <h2 className="text-2xl font-bold">
                  IT Assistant - Westforce Credit Union
                </h2>
                <p>Writing IT policies, updating hardware.</p>
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

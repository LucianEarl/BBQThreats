import React from "react";

// imported components
import Background from "../components/background/Background";
import backgroundData from "../components/background/BackgroundData";
import LogoComponent from "../components/portfolio/LogoComponent";

//imported images
import githubLogo from "../media/images/logos/GitHub-Mark-120px-plus.png";
import linkedinLogo from "../media/images/logos/LI-In-Bug.png";
import timImage from "../media/images/tim.png";

function Tim() {
  return (
    <div className="bg-background bg-opacity-60 h-screen w-screen text-center flex flex-col overflow-scroll font-righteous text-white">
      <div className="sm:max-w-2xl sm:mx-auto">
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
        <section className="text-white font-righteous flex flex-wrap w-full">
          <article className="flex justify-center w-full">
            <h2 className="text-5xl p-6">Tim Whatley</h2>
          </article>
          <article className="flex justify-center w-full">
            <img
              src={timImage}
              alt=""
              className=" w-15 h-15 sm:max-w-lg border-white border-2 rounded-full"
            />
          </article>
        </section>
        <div className="flex flex-col">
          <section>
            <article className="p-2">
              <h2 className="text-3xl">What am I about?</h2>
              <p>
                I am an excellent communicator and team player who loves
                learning and problem solving. When confronted with a problem I
                strive to solve it and enjoy expanding my knowledge. Development
                is a passion and I find the day disappearing as I learn and
                code. When being a member of a team I focus on accomplishing our
                goals, striving to work well together, having strong
                communication and fun.
              </p>
            </article>
            <article className="p-2">
              <h2 className="text-3xl">Portfolio</h2>
              <ul>
                <li>
                  <a
                    href="https://www.daisylake.co.nz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Daisy Lake
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.clothnz.co.nz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cloth Commercial Textiles
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.starrynights.co.nz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Starry Nights
                  </a>
                </li>
              </ul>
            </article>
          </section>
          <section>
            <article className="p-2">
              <h2 className="text-3xl">Skills</h2>
            </article>
            <article className="p-2">
              <h2 className="text-2xl">Frontend</h2>
              <ul>
                <li>HTML/CSS</li>
                <li>TailwindCss</li>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>Python</li>
              </ul>
            </article>
            <article className="p-2">
              <h2 className="text-2xl">Backend</h2>
              <ul>
                <li>SQL</li>
                <li>MySQL</li>
                <li>NodeJS(Express)</li>
              </ul>
            </article>
          </section>
          <section>
            <article className="p-2">
              <h2 className="text-3xl">My Qualifications</h2>
            </article>
            <article className="p-2">
              <ul>
                <li className="p-2">
                  Whitecliffe College of Art and Technology (2019-2021)
                  <ul>
                    <li className="italic">
                      Diploma of Software Development (Level 6)
                    </li>
                  </ul>
                </li>
                <li className="p-2">
                  NZ Healthcare & Disability (2018-2021)
                  <ul>
                    <li className="italic">MAPA Certification</li>
                    <li className="italic">
                      MySkill Level 3 Positive Behaviour Support (US 23388)
                    </li>
                    <li className="italic">
                      Personal Cares (US 23386, Level 3)
                    </li>
                    <li className="italic">Certificate in First Aid</li>
                  </ul>
                </li>
                <li className="p-2">
                  Unitec Institute of Technology (2009)
                  <ul>
                    <li className="italic">
                      Certificate in Applied Technology (Carpentry)
                    </li>
                  </ul>
                </li>
                <li className="p-2">Parnell College (2008)</li>
              </ul>
            </article>
          </section>
          <section>
            <article className="p-2">
              <h2 className="text-3xl">My Experience</h2>
            </article>
            <article className="p-2">
              <h2 className="text-xl">
                Daisy Lake Limited <br /> (2021-Current)
              </h2>
              <p>
                Daisy Lake is a small startup, started with a friend from school
                doing website design and development. After a few clients we
                have decided to gain more experience and learning.
              </p>
            </article>
            <article className="p-2">
              <h2 className="text-xl">Divers Group (2020/2021)</h2>
              <p>
                Divers Group is a medium size company supplying IT systems to
                various small, medium and large size businesses. <br />
                <br /> While working for Divers I un-packed/packed monitors,
                sorted cables and prepared an installation for a large project.
                I then installed office desks with the monitors and cables to
                the client specifications. I would also remove docking set-ups
                from desks and pack them ready for transportation back to the
                main warehouse. The managing director stated I had passed his
                expectations with how hard we worked and completed the project.
              </p>
            </article>
            <article className="p-2">
              <h2 className="text-xl">
                NZ Healthcare & Disability <br /> (2018-2021)
              </h2>
              <p>
                NZ Healthcare and Disability is a government funded service
                providing support workers to assist people with disabilities.
                <br />
                <br />
                As a support worker for people with disabilities (children and
                young adults) I must be vigilant, empathetic and patient.
                Everyday has something new, whether it be success and/or
                challenges. My role is to help the people I support achieve
                their goals such as more independence, learning social skills
                and getting out into the community. I also asked for extra work
                and was given administration duties such as, data input, client
                service and form correction.
              </p>
            </article>
            <article className="p-2">
              <h2 className="text-xl">
                Cloth Commercial Textiles
                <br />
                (2011-2019)
              </h2>
              <p>
                ClothNZ is a small company specializing in supplying materials
                to commercial office furniture manufacturers.
                <br />
                <br />
                While at ClothNZ my duties included:
                <li className="p-2">
                  Stores management- Inventory Management, Customer Service,
                  Problem solving, order processing and reporting to the
                  managing director. I was responsible for managing all the
                  customer orders and inquiries ensuring that deliveries met the
                  customer requirements.
                </li>
                <li className="p-2">
                  I.T. – Maintenance of systems, creating
                  documents/spreadsheets, maintaining/updating the company’s
                  websites. I set up and simplified the day to day operating
                  systems improving the performance of document processing.
                </li>
                <li className="p-2">
                  Logistics – I dealt with the courier and transport companies,
                  handling of the international freight making sure it was
                  received, dispatched correctly and provided support services
                  to our customers.
                </li>
              </p>
            </article>
            <article className="p-2">
              <h2 className="text-xl">
                Peter McKay Architecture
                <br />
                (2009)
              </h2>
              <p>
                I used my skills developed during my successful completion of
                the certificate of applied technology course (carpentry) to
                assist with landscaping and general carpentry on small to medium
                size projects.
              </p>
            </article>
            <article className="p-2">
              <h2 className="text-xl">
                Janet McVeagh Recreation
                <br />
                (2006-2011)
              </h2>
              <p>
                Janet McVeagh Recreation provided disability services to people
                of all ages, running daily, weekend and weeklong camps.
                <br />
                <br />
                <li>
                  Be responsible for different types of needs and medications
                </li>
                <li>drive vans and trailers</li>
                <li>cooking and cleaning</li>
              </p>
            </article>
          </section>
        </div>
      </div>
      <Background BackgroundData={backgroundData[1]} />
    </div>
  );
}

export default Tim;

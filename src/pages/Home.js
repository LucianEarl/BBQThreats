import React from "react";

// Home background components
import Background from "../components/background/Background";
import BackgroundData from "../components/background/BackgroundData";

// Home Button
import Button from "../components/home/HomeButton";
// Picture of Lucian and Tim
import lucianPic from "../media/images/lucian.jpg";
import timPic from "../media/images/tim.jpg";

function Home() {
  return (
    <div className="bg-background bg-opacity-40 h-screen w-screen mx-auto text-center flex flex-col">
      <div className="mx-auto my-auto flex flex-wrap sm:justify-center">
        <section className="hidden sm:block text-white font-righteous text-5xl p-6">
          <h2>BBQThreats Presents</h2>
        </section>
        <section className="text-white font-righteous order-1 sm:order-2">
          <article className="text-3xl p-2">
            <h2>What?</h2>
          </article>
          <article className="p-2 mx-2">
            <p>
              The fantastic collaborative portfolio of Lucian Earl and Tim
              Whatley
            </p>
          </article>
        </section>
        <section className="text-white font-righteous order-2 sm:order-1 sm:flex sm:flex-col sm:w-full">
          <article className="text-3xl p-2">
            <h2>Who?</h2>
          </article>
          <article className="hidden sm:block sm:text-3xl">
            <h2>
              {"<- "}These Guys{" ->"}
            </h2>
          </article>
          <article className="sm:hidden">
            <p>We both are rocking coolio people</p>
          </article>
          <section className="flex flex-row ">
            <article className="flex sm:justify-center">
              <Button name={"Lucian Earl"} image={lucianPic} link={"/Lucian"} />
            </article>
            <article className="flex sm:justify-center">
              <Button name={"Tim Whatley"} image={timPic} link={"/Tim"} />
            </article>
          </section>
        </section>
      </div>
      <Background BackgroundData={BackgroundData[0]} />
    </div>
  );
}

export default Home;

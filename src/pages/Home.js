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
      <section className="text-white font-righteous">
        <article className="text-3xl p-2">
          <h2>What?</h2>
        </article>
        <article className="p-2 mx-2">
          <p>
            The fantastic collaborative portfolio of Lucian Earl and Tim Whatley
          </p>
        </article>
      </section>
      <section className="text-white font-righteous">
        <article className="text-3xl p-2">
          <h2>Who?</h2>
        </article>
        <article className="flex flex-row">
          <Button name={"Lucian Earl"} image={lucianPic} />
          <Button name={"Tim Whatley"} image={timPic} />
        </article>
      </section>
      <Background BackgroundData={BackgroundData[0]} />
    </div>
  );
}

export default Home;

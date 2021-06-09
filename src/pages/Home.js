import React from "react";

import Background from "../components/background/Background";
import BackgroundData from "../components/background/BackgroundData";

function Home() {
  return (
    <div className="bg-background bg-opacity-40 h-screen w-screen container mx-auto text-center">
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
        <article className="">Lucian goes here</article>
        <article className="">Tim goes here</article>
      </section>
      <Background BackgroundData={BackgroundData[0]} />
    </div>
  );
}

export default Home;

import React from "react";
import { Translation } from "../Translation";

const Hero = () => {
  return (
    <section className="h-[400px] md:h-screen overflow-hidden">
      <div
        style={
          {
            // backgroundPosition: "-290px 0px",
          }
        }
        className="hero-animation bg-cover bg-no-repeat sm:bg-cover  bg-top bg-fixed h-full sm:h-screen bg-[url('/hero3.jpg')] overflow-hidden lg:bg-center"
      />
      <div className="flex justify-center items-center"></div>
    </section>
  );
};

export default Hero;

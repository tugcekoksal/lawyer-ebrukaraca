import React from "react";
import { Translation } from "../Translation";

const Hero = () => {
  return (
    <section className="h-screen overflow-hidden">
      <div className="hero-animation bg-contain bg-no-repeat sm:bg-cover bg-center bg-fixed h-full sm:h-screen bg-[url('/hero3.jpg')] overflow-hidden" />
      <div className="flex justify-center items-center"></div>
    </section>
  );
};

export default Hero;

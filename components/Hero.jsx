import React from "react";
import { Translation } from "../Translation";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="hero-image  relative  h-screen sm:h-screen  bg-center overflow-hidden"
      />

      <div className="flex justify-center items-center"></div>
    </section>
  );
};

export default Hero;

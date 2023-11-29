import React from "react";
import { Translation } from "../Translation";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div
        style={{
          backgroundImage: "url('/hero3.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="hero-animation  relative  h-screen sm:h-screen  overflow-hidden bg-fixed overflow-hidden"
      />

      <div className="flex justify-center items-center"></div>
    </section>
  );
};

export default Hero;

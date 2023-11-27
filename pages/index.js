import Hero from "@/components/Hero";
import { PuffLoader } from "react-spinners";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Uzmanlik from "@/components/Uzmanlik";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/hero1.jpg";
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-[#dbd7d6] ">
          <PuffLoader color="#624d43" />
        </div>
      ) : (
        <div className="relative">
          {/* <div className={` ${scrolling ? "scrolled" : "scroll-logo"}`}>
            <img src="logo2.png" className="w-[530px] h-[230px] opacity-90" />
          </div> */}

          <Hero />

          <About />

          <Uzmanlik />
          <Quote />
        </div>
      )}
    </main>
  );
}

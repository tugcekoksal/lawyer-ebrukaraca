import Hero from "@/components/Hero";
import { PuffLoader } from "react-spinners";
import { useState, useEffect } from "react";
import Link from "next/link";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Uzmanlik from "@/components/Uzmanlik";
import TopBar from "@/components/TopBar";
import { Translation } from "../Translation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/hero3.jpg";
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
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
          <TopBar />
          <Hero />
          <About />
          <div className="flex justify-center items-center flex-col">
            <p className="text-sm mb-5 font-bold text-[#bbbcbc]">
              <Translation textKey="baslik" />
            </p>
            <h2 className="mx-6 md:mx-[7rem] font-bold text-xl md:text-3xl mb-8 ">
              <Translation textKey="uzmanlik" />
            </h2>
            <Link
              href={"/uzmanlik"}
              className="text-sm text-[#bea78a] font-bold"
            >
              {" "}
              <Translation textKey="tumunugor" /> →
            </Link>
            <hr className="my-4 w-[3%]  border-[#bea78a] border-t-[3px] mt-4" />
          </div>
          <div className="mt-[-10px]">
            <Uzmanlik numberOfCards={3} col={3} />
          </div>
          <Quote />
        </div>
      )}
    </main>
  );
}

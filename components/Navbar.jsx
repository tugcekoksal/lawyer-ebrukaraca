import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import LanguageSwitcher from "./LanguageSwitcher";
import { Translation } from "../Translation";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [color, setColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setColor(
      router.pathname === "/" || isScrolled ? "text-black" : "text-white"
    );
  }, [router.pathname, isScrolled]);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuItems = () => {
    const menuItems = ["/", "/hakkimizda", "/uzmanlik", "/makale", "/iletisim"];
    const menuItemKeys = [
      "anasayfa",
      "hakkimizda",
      "uzmanlik",
      "makale",
      "iletisim",
    ];

    return menuItems.map((item, index) => (
      <li key={item} onClick={handleMenu} className="p-2 text-md font-serif">
        <Link href={item}>
          <Translation textKey={menuItemKeys[index]} />
        </Link>
      </li>
    ));
  };

  return (
    <nav
      className={`fixed flex justify-center items-center top-0 right-0 left-0 ${
        isScrolled ? "bg-white shadow-sm" : "text-white"
      } p-4 z-[97]`}
    >
      <div
        className={` ${
          !isScrolled && router.pathname === "/" ? "scroll-logo " : "scrolled"
        }`}
      >
        <img
          src={`${
            router.pathname === "/" || isScrolled ? "logo2.png" : "logo4.png"
          }`}
          className="w-[530px] h-[230px] opacity-90"
        />
      </div>
      <div className="container mx-auto py-2 flex justify-center items-center">
        <ul
          className={`hidden lg:flex ml-[150px] space-x-12  uppercase ${
            router.pathname === "/" ? "text-[#22161e]" : ""
          }`}
        >
          {renderMenuItems()}
        </ul>
      </div>

      <div className="mr-[10px]">
        <LanguageSwitcher color={color} />
      </div>

      <div
        onClick={handleMenu}
        className={`fixed top-[1.5rem] left-10 block sm:hidden z-[100] border border-solid p-1 rounded-xl`}
      >
        {isMenuOpen ? (
          <AiOutlineClose size={24} className="text-gray-600" />
        ) : (
          <AiOutlineMenu size={24} className="text-gray-600" />
        )}
      </div>

      <div
        className={
          isMenuOpen
            ? "sm:hidden absolute top-0 right-[0] left-[0] bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 z-[99] text-black"
            : "sm:hidden absolute top-0 left-[100%] right-[0] bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 text-black"
        }
      >
        <ul>{renderMenuItems()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
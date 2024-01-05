import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { Translation } from "../Translation";
import { uzmanlik } from "@/utils/uzmanlikData";

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
      <li
        key={item}
        onClick={handleMenu}
        className={`py-2  text-md font-serif link relative group ${
          router.pathname === item ? "active-link" : ""
        }`}
      >
        <Link href={item}>
          <div className="flex flex-col items-start">
            <Translation textKey={menuItemKeys[index]} />
            {item === "/uzmanlik" && (
              <div className="absolute left-0 mt-8 w-full bg-white text-black text-xs p-1 opacity-0 group-hover:opacity-100 duration-300 z-10">
                {uzmanlik.map((subItem) => (
                  <Link
                    href={`/uzmanlik/${subItem.id}`}
                    key={subItem.name}
                    className="block p-2  hover:bg-[#634927] hover:text-white"
                  >
                    <Translation textKey={subItem.name} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Link>
      </li>
    ));
  };

  return (
    <nav
      className={` fixed flex justify-center items-center right-0 left-0 ${
        isScrolled ? "bg-white shadow-sm " : "text-white "
      } ${
        !isScrolled && router.pathname === "/" ? "top-8" : "top-0"
      } pb-[2rem] sm:pb-0 p-4 z-[97]`}
    >
      <Link
        href={"/"}
        className={` ${
          !isScrolled && router.pathname === "/" ? "scroll-logo " : "scrolled"
        }`}
      >
        <Image
          src={
            router.pathname === "/" || isScrolled
              ? "/logo-siyah.png"
              : "/logo-beyaz.png"
          }
          alt="Logo"
          width={685} // adjust as necessary
          height={268} // adjust as necessary
        />
      </Link>

      <div className="container mx-auto py-2 flex justify-center items-center">
        <ul
          className={`hidden lg:flex ml-[150px] space-x-12  uppercase ${
            router.pathname === "/" ? "text-[#22161e]" : ""
          }`}
        >
          {renderMenuItems()}
        </ul>
      </div>
      <div className="flex items-center justify-center mr-[10px]">
        <LanguageSwitcher color={color} />
        <div
          onClick={handleMenu}
          className={` lg:hidden ml-8 z-[100] border border-opacity-20 border-black p-1 rounded-xl`}
        >
          {isMenuOpen ? (
            <AiOutlineClose size={20} className="text-gray-600" />
          ) : (
            <AiOutlineMenu size={20} className={`${color}`} />
          )}
        </div>{" "}
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

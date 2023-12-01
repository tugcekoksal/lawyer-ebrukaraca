import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLanguage } from "@/LanguageContext";
import Image from "next/image";

const flagMap = {
  tr: "/flags/turkish.png",
  en: "/flags/english.png",
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="px-2 py-1 flex items-center text-xl"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <Image
          src={flagMap[language]}
          alt={`${language} flag`}
          width={62}
          height={44}
          className="inline-block w-5 h-3 mr-1"
        />
        <span className="ml-1">
          <IoMdArrowDropdown />
        </span>
      </button>

      {showDropdown && (
        <div className="absolute mt-2 py-2 w-[4rem] bg-white border rounded shadow-xl ">
          {Object.entries(flagMap).map(
            ([code, flagUrl]) =>
              code !== language && (
                <button
                  key={code}
                  className="block px-4 py-2 text-xl w-full text-left text-black hover:bg-[#9b7157] hover:text-white"
                  onClick={() => handleLanguageChange(code)}
                >
                  <Image
                    src={flagUrl}
                    alt={`${code} flag`}
                    width={62}
                    height={44}
                    className="inline-block w-5 h-3 mr-2"
                  />
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

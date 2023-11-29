import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLanguage } from "@/LanguageContext";

const flagMap = {
  tr: "🇹🇷",
  en: "🇬🇧",
  // Add more languages and their corresponding flags here
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
        {flagMap[language]}{" "}
        <span className="ml-2">
          <IoMdArrowDropdown />
        </span>
      </button>

      {showDropdown && (
        <div className="absolute mt-2 py-2 w-[3rem] bg-white border rounded shadow-xl ">
          {Object.entries(flagMap).map(
            ([code, flag]) =>
              code !== language && (
                <button
                  key={code}
                  className="block px-4 py-2 text-xl w-full text-left text-black hover:bg-[#9b7157] hover:text-white"
                  onClick={() => handleLanguageChange(code)}
                >
                  {flag}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

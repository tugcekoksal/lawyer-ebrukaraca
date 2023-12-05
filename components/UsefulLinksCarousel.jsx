import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Translation } from "../Translation";

const UsefulLinksCarousel = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleLinksCount, setVisibleLinksCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleLinksCount(1); // For small screens
      } else if (window.innerWidth < 768) {
        setVisibleLinksCount(2); // For medium screens
      } else {
        setVisibleLinksCount(4); // For large screens and above
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : links.length - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < links.length - 1 ? prevIndex + 1 : 0
    );
  };

  const endIndex = activeIndex + visibleLinksCount;
  const visibleLinks = links
    .slice(activeIndex, endIndex)
    .concat(links.slice(0, Math.max(endIndex - links.length, 0)));

  return (
    <div className="bg-white py-8 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center my-10 uppercase">
          <Translation textKey="link" />
        </h2>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={goPrevious}
            aria-label="Previous"
            className="mr-2 lg:mr-6 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex overflow-hidden w-full mt-10">
            {visibleLinks.map((link, index) => (
              <a
                key={`${link.name}-${index}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center group w-full sm:w-1/2 lg:w-1/4"
              >
                <img
                  src={link.imageUrl}
                  alt={link.name}
                  className="max-h-20 max-w-full grayscale group-hover:grayscale-0 transition duration-300"
                />
              </a>
            ))}
          </div>
          <button
            onClick={goNext}
            aria-label="Next"
            className="ml-2 lg:ml-6 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-center my-8 w-full ">
          {links.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === activeIndex ? "bg-blue-600" : "bg-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulLinksCarousel;

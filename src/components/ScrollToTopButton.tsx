import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const newProgress = scrollTop / scrollHeight;

      if (newProgress > 0.03) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`up-btn fixed bottom-16 lg:bottom-5 right-6 z-[500] background-accent__item text-white rounded-full cursor-pointer transition-all duration-300 w-14 h-14 lg:w-[4.1rem] lg:h-[4.1rem] flex justify-center items-center border-[3px] border-white hover:bg-black ${
        isVisible ? "opacity-100" : "opacity-0"
      } focus:outline-none focus:ring-0 focus:ring-offset-0`}
      onClick={handleClick}
      title="Go to top"
    >
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full"
      />
      <span className="text-3xl lg:text-4xl rounded-full z-10">
        <FaChevronUp />
      </span>
    </button>
  );
}

export default ScrollToTopButton;

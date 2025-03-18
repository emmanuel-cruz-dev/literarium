import useScrollToTop from "../../hooks/useScrollToTop";
import { FaChevronUp } from "react-icons/fa";
import { handleClick } from "../../utils/handleClick";

function ScrollToTopButton() {
  const isVisible = useScrollToTop();

  return (
    <button
      className={`up-btn fixed bottom-16 lg:bottom-5 right-6 z-[500] background-accent__item text-white rounded-full cursor-pointer transition-all duration-300 w-14 h-14 lg:w-[3.75rem] lg:h-[3.75rem] flex justify-center items-center border-[3px] border-white hover:bg-black ${
        isVisible ? "opacity-100" : "opacity-0"
      } focus:outline-none focus:ring-0 focus:ring-offset-0`}
      onClick={handleClick}
      title="Go to top"
    >
      <div className="absolute top-0 left-0 w-full h-full rounded-full" />
      <span className="text-3xl rounded-full z-10">
        <FaChevronUp />
      </span>
    </button>
  );
}

export default ScrollToTopButton;

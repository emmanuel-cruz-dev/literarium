import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <main
      className="hero h-screen flex flex-col justify-center items-center text-white"
      id="hero"
    >
      <div className="hidden lg:flex flex-grow"></div>
      <div className="flex flex-col items-center gap-6 text-center pb-8 w-11/12">
        <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide">
          Your trusted bookstore
        </h1>
        <h2 className="hidden lg:block text-2xl lg:text-3xl font-bold uppercase title__double-lines">
          Inspiring readers, one book at a time
        </h2>
        <p className="lg:w-3/5">
          Dive into a universe of knowledge and entertainment. Physical and
          digital books and home deliveries at your fingertips.
        </p>
        <div className="rounded-full overflow-hidden hidden lg:flex justify-between items-center w-[36rem] h-12">
          <input
            name="search"
            className="bg-slate-900/70 w-[86%] h-full px-8 focus:outline-none"
            type="text"
            placeholder="Enter your book title here"
          />
          <button
            className="w-[14%] flex justify-center items-center h-full background-accent__item hover:bg-white hover:text-gray-800 transition-colors duration-300 ease-in-out"
            id="search"
            name="search"
            title="Search"
          >
            <FaSearch className="text-xl" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;

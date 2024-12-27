import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <main
      className="hero h-screen flex flex-col justify-center items-center text-white"
      id="hero"
    >
      <div className="flex-grow"></div>
      <div className="flex flex-col items-center gap-6 text-center pb-8">
        <h1 className="text-8xl font-bold uppercase tracking-wide">
          Book Store
        </h1>
        <h2 className="text-4xl font-bold uppercase title__double-lines">
          Book Guiders
        </h2>
        <p className="w-3/5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolor emque laudantium, totam rem aperiam.ipsam
          voluptatem.
        </p>
        <div className="rounded-full overflow-hidden flex justify-between items-center w-[36rem] h-12">
          <input
            className="bg-slate-900/70 w-[86%] h-full px-8"
            type="text"
            placeholder="Enter your book title here"
          />
          <button className="w-[14%] flex justify-center items-center h-full background-accent__item">
            <FaSearch className="text-white text-xl" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;

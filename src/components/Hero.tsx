import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <main
      className="hero h-screen flex justify-center items-center text-white"
      id="hero"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-8xl font-bold uppercase">Book Store</h1>
        <h2 className="text-4xl font-bold uppercase">Book Guiders</h2>
        <p className="w-3/5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolor emque laudantium, totam rem aperiam.ipsam
          voluptatem.
        </p>
        <div className="rounded-xl overflow-hidden">
          <input
            className="bg-slate-300 text-white w-80 px-2"
            type="text"
            placeholder="Enter your book title here"
          />
          <button className="background-accent__item w-10">
            <FaSearch className="text-white h-full" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;

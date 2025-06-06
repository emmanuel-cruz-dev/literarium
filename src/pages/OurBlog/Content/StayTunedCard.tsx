import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa6";

function StayTunedCard() {
  return (
    <article className="flex flex-col gap-4">
      <h2 className="blog-content__aside__item-title">Stay Tuned</h2>
      <div className="grid grid-cols-3 items-center border border-slate-300 overflow-hidden">
        <input
          name="subscribe"
          id="subscribe"
          className="col-span-2 py-2 px-3 focus:outline-none"
          type="text"
          placeholder="Subscribe Us"
        />
        <button className="w-full h-full text-white background-accent__item uppercase font-bold hover:bg-black transition-colors duration-300 ease-in-out">
          Submit
        </button>
      </div>
      <div>
        <ul className="blog-content__aside__unordered-list flex justify-between gap-4 text-lg">
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGooglePlusG />
            </a>
          </li>
          <li>
            <a href="#">
              <FaSkype />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default StayTunedCard;

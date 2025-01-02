import { FaTags, FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";

interface InformationListProps {
  data: string[];
}

const data = [
  "Specials",
  "New Products",
  "Best Sellers",
  "Contact Us",
  "Terms Of Use",
  "Site Map",
];

const InformationList: FC<InformationListProps> = ({ data }) => {
  return (
    <ul className="unordered__list-container hover-item">
      {data.map((item) => (
        <li key={item}>
          <a className="flex items-center justify-between" href="#">
            {item} <FaChevronRight />
          </a>
        </li>
      ))}
    </ul>
  );
};
const Footer = () => {
  return (
    <footer className="footer bg-black text-white" id="footer">
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 py-12 mx-auto">
        <div>
          <h2 className="footer__list-title">About Us</h2>
          <ul className="footer__list-container">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </li>
            <li>
              <FaTags />
              450 Fifth Avenue, 34th floor. NYC
            </li>
            <li>
              <FaPhoneAlt />
              (+800) 123 4567 890
            </li>
            <li>
              <FaEnvelope />
              <a
                target="_blank"
                href="https://kodeforest.net/html/books/store/index.html"
                title="Main Template"
              >
                info@literarium.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__list-title">Latest Tweets</h2>
          <ul className="footer__list-container">
            <li className="footer__tweets">
              <FaTwitter />
              <p>
                "Design Patterns" is sweeping our store this week!
                #recommendedBooks
                <span>⏰ Posted 4 hours ago</span>
              </p>
            </li>
            <li className="footer__tweets">
              <FaTwitter />
              <p>
                🌟 "A book is a dream you can hold in your hands." - Neil Gaiman
                <span>⏰ Posted 5 hours ago</span>
              </p>
            </li>
            <li className="footer__tweets">
              <FaTwitter />
              <p>
                🙏 Thank you to our followers for making this community a place
                full of stories. We are already 10,000! 🎉
                <span>⏰ Posted 2 days ago</span>
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__list-title">Information</h2>
          <InformationList data={data} />
        </div>

        <div>
          <h2 className="footer__list-title">Newsletter</h2>
          <ul className="footer__list-container">
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </li>
            <li>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 bg-slate-700"
                />
                <button className="background-accent__item font-bold uppercase py-2 px-4 w-fit hover:bg-slate-700 transition-colors duration-300 ease-in-out">
                  Subscribe
                </button>
              </form>
            </li>
          </ul>
        </div>
      </article>
      <article className="bg-gray-900 px-4 py-12 lg:py-6 lg:px-8 mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center text-center">
        <span>
          Copyright © 2024-25{" "}
          <a
            className="hover:underline"
            href="https://emmanuel-cruz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emmanuel
          </a>
          . All rights reserved.
        </span>
        <a
          className="font-medium hover:underline"
          href="https://kodeforest.net/html/books/store/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plantilla Principal
        </a>
      </article>
    </footer>
  );
};

export default Footer;

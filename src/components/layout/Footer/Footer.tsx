import { InformationList } from "../../ui/InformationList";
import CreditCards from "../../../assets/images/credit-cards.avif";
import { FaTags, FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { listData } from "../../../data/listData";
import "../../../styles/components/layout.css";

function Footer() {
  return (
    <footer className="footer bg-black text-white" id="footer">
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 py-8 md:p-12 mx-auto">
        <div>
          <h2 className="footer__list-title">About Us</h2>
          <ul className="footer__list-container">
            <li>
              We are passionate about the world of books. We are more than just
              a bookstore, we are a place where words come to life.
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
                "Design Patterns" is sweeping our store this week! #recommended
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
                🙏 Thank you for making this community thrive with stories.
                We're now 10,000 strong! 🎉
                <span>⏰ Posted 2 days ago</span>
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__list-title">Information</h2>
          <InformationList data={listData} />
        </div>

        <div>
          <h2 className="footer__list-title">Newsletter</h2>
          <ul className="footer__list-container">
            <li>
              <p>
                Subscribe and stay up to date with the latest literary news,
                promotions and recommendations specially selected for you.
              </p>
            </li>
            <li>
              <form
                className="flex flex-col gap-4 w-full"
                action="#"
                method="post"
                id="footer__newsletter-form"
              >
                <input
                  required
                  autoComplete="off"
                  name="email"
                  id="footer__email"
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 bg-neutral-900"
                />
                <button className="background-accent__item font-bold uppercase py-2 px-4 w-fit hover:bg-neutral-900 transition-colors duration-300 ease-in-out">
                  Subscribe
                </button>
              </form>
            </li>
          </ul>
        </div>
      </article>
      <article className="bg-neutral-900/60 px-4 py-8 lg:py-7 lg:px-6 mx-auto flex flex-col lg:flex-row gap-6 justify-between items-center text-center">
        <img
          className="max-w-60"
          src={CreditCards}
          alt="Tarjetas de crédito"
          width="1000"
          height="139"
          loading="lazy"
        />
        <div className="flex flex-col justify-center items-center">
          <span>
            Crafted by{" "}
            <a
              className="hover:underline"
              href="https://emmanuel-cruz.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Emmanuel Cruz Portfolio"
            >
              Emmanuel
            </a>{" "}
            © 2024-25.
          </span>
          <span>Bringing the web to life, one component at a time.</span>
        </div>
        <div className="hidden lg:block w-60"></div>
      </article>
    </footer>
  );
}

export default Footer;

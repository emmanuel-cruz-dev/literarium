import { Link } from "react-router-dom";
import Logo from "../assets/icons/literarium-icono.png";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 text-white">
      <nav className="flex justify-between items-center h-full px-4 md:px-16">
        <div className="flex items-center gap-2">
          <img
            className="w-8"
            src={Logo}
            alt="Icono de librería, 3 libros apilados uno sobre otro"
          />
          <a href="/" className="text-2xl">
            Literarium
          </a>
        </div>
        <ul className="header__list-container gap-4 hidden md:flex text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Our Blog</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="block md:hidden">
          <HiMenu className="text-3xl" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

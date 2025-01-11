import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/literarium-icono.png";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
    if (!menu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 text-white">
      <nav className="flex justify-between items-center h-full px-4 md:px-8 lg:px-16">
        <div className="flex items-center gap-2 py-6">
          <img
            className="w-8"
            src={Logo}
            alt="Icono de librería, 3 libros apilados uno sobre otro"
            width="600"
            height="600"
            loading="lazy"
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
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="block md:hidden">
          <button onClick={handleClick} title="Open Menu">
            <HiMenu className="text-3xl" />
          </button>

          <div
            className={`${menu ? "active" : ""} header__hidden-menu text-white`}
          >
            <button
              className="absolute top-6 right-4"
              onClick={handleClick}
              title="Close Menu"
            >
              <HiX className="text-3xl" />
            </button>
            <ul className="h-full flex flex-col justify-center items-center gap-5 text-xl">
              <li onClick={handleClick}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/about">About Us</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/blog">Our Blog</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/products">Products</Link>
              </li>
              <li onClick={handleClick}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

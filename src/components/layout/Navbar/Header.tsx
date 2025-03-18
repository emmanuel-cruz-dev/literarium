import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/literarium-icono.png";
import { HiMenu, HiX } from "react-icons/hi";
import useMenu from "../../../hooks/useMenu";

function Header() {
  const { menu, toggleMenu } = useMenu();

  return (
    <header className="absolute top-0 left-0 right-0 text-white">
      <nav className="flex justify-between items-center h-full px-4 md:px-8 lg:px-16">
        <a href="/" className="flex items-center gap-2 py-6" title="Home">
          <img
            className="w-8"
            src={Logo}
            alt="Icono de Literarium, una persona leyendo un libro"
            width="100"
            height="100"
            loading="lazy"
          />
          <span className="text-2xl">Literarium</span>
        </a>
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
          <button onClick={toggleMenu} title="Open Menu">
            <HiMenu className="text-3xl" />
          </button>

          <div
            className={`${menu ? "active" : ""} header__hidden-menu text-white`}
          >
            <button
              className="absolute top-6 right-4"
              onClick={toggleMenu}
              title="Close Menu"
            >
              <HiX className="text-3xl" />
            </button>
            <ul className="h-full flex flex-col justify-center items-center gap-5 text-xl">
              <li onClick={toggleMenu}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/about">About Us</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/blog">Our Blog</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/products">Products</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import Logo from "../assets/icons/libro.png";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-2 px-4">
        <div className="flex items-center gap-2">
          <img
            className="w-8"
            src={Logo}
            alt="Icono de librería, 3 libros apilados uno sobre otro"
          />
          <a href="/" className="text-2xl">
            Books Guide
          </a>
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/blog">Our Blog</a>
          </li>
          <li>
            <a href="/teams">Teams</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";

const data = [
  "Specials",
  "New Products",
  "Best Sellers",
  "Contact Us",
  "Terms Of Use",
  "Site Map",
];

const InformationList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item}>
          <a
            className="flex justify-between items-center hover:px-2 transition-all duration-300"
            href="#"
          >
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
      <article className="grid grid-cols-4 gap-4 w-11/12 py-12 mx-auto">
        <div>
          <h2>About Us</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </li>
            <li>450 Fifth Avenue, 34th floor. NYC</li>
            <li>(+800) 123 4567 890</li>
            <li>
              <a href="#">info@literarium.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Latest Tweets</h2>
          <ul className="[&>li>span]:text-xs flex flex-col gap-2">
            <li>
              <p>
                "The Art of Storytelling" está arrasando en nuestra tienda esta
                semana! #LibrosRecomendados
              </p>
              <span>⏰ Publicado hace 4 horas</span>
            </li>
            <li>
              <p>
                🌟 "Un libro es un sueño que puedes sostener en tus manos." -
                Neil Gaiman ¿Qué libro estás sosteniendo hoy? Comenta abajo 👇
              </p>
              <span>⏰ Publicado hace 5 horas</span>
            </li>
            <li>
              <p>
                🙏 Gracias a nuestros seguidores por hacer de nuestra comunidad
                un lugar lleno de historias. ¡Ya somos 10,000! 🎉 📚 Nos esperan
                grandes cosas juntos.
              </p>
              <span>⏰ Publicado hace 2 días</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Information</h2>
          <InformationList data={data} />
        </div>
      </article>
      <article className="bg-gray-900 px-4 py-12 lg:py-6 lg:px-8 mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center text-center">
        <span>
          Copyrights © 2024-25{" "}
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

const Footer = () => {
  return (
    <footer className="footer text-white" id="footer">
      <article className="bg-black">
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
      </article>
      <article className="bg-black/90 px-4 py-12 lg:py-6 lg:px-8 mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center text-center">
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

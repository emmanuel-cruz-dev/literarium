const Footer = () => {
  return (
    <footer className="bg-black/90 text-white">
      <div className="px-4 py-12 lg:py-6 lg:px-8 mx-auto flex flex-col lg:flex-row gap-4 justify-between items-center text-center">
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
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white">
      <div className="py-6 px-8 mx-auto flex justify-between">
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

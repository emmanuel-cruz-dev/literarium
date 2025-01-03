import PeopleImage from "../../../assets/images/about-people-img.jpg";

const AboutWelcome = () => {
  return (
    <section className="main-cards w-11/12 mx-auto py-12" id="main-cards">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
        <h2 className="section__title">
          Welcome to <span className="text__accent-color">Literarium</span>
        </h2>
      </div>
      <article className="grid grid-cols-1 xl:grid-cols-3 gap-12 lg:gap-16 py-6 font-thin">
        <figure className="mx-auto lg:col-span-1">
          <img src={PeopleImage} alt="People" />
        </figure>
        <div className="col-span-2 tracking-wider flex flex-col gap-4 items-center">
          <p>
            <span className="float-left text-white text-6xl font-semibold p-1 pb-2 px-3 mr-3 background-accent__item">
              A
            </span>
            t Literarium, we are passionate about the power of books to
            transform lives and expand horizons. We offer a carefully curated
            selection of titles ranging from literary classics to the latest in
            fiction and nonfiction. We are committed to providing a unique
            experience for every reader, whether you are looking for a casual
            read or a profound work that leaves a lasting impression. At
            Literarium, we understand that every book tells a unique story, and
            we strive to connect our customers with the stories they are looking
            for. We offer resources, reviews, and dedicated customer service to
            ensure your experience is exceptional.
          </p>
          <p>
            Our online bookstore is more than just a place to buy books; it's a
            space where the passion for reading is celebrated every day. From
            reader guides to personalized recommendations, we're here to help
            you discover new authors, explore exciting genres, and find the
            perfect books for every moment. Plus, we offer a fast and efficient
            delivery system so you can enjoy your reading without worrying about
            logistics. At Literarium, we believe that every book is a door to a
            new world, and we're excited to be a part of your next literary
            journey.
          </p>
          <ul className="welcome__custom-list w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2">
            <li>Wide selection of books for all tastes.</li>
            <li>New releases and classics in all genres.</li>
            <li>Fast and secure shipping nationwide.</li>
            <li>Personalized recommendations for readers.</li>
            <li>Ebooks and physical books in one place.</li>
            <li>Online community of reading lovers.</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutWelcome;

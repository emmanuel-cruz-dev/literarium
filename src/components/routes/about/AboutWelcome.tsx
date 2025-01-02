import PeopleImage from "../../../assets/images/about-people-img.jpg";

const AboutWelcome = () => {
  return (
    <section className="main-cards w-11/12 mx-auto py-12" id="main-cards">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
        <h2 className="section__title">
          Welcome to <span className="text__accent-color">Literarium</span>
        </h2>
      </div>
      <article className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16 py-6">
        <figure className="col-span-1">
          <img src={PeopleImage} alt="People" />
        </figure>
        <div className="col-span-2 tracking-wider flex flex-col gap-4 items-center">
          <p>
            <span className="float-left text-white text-6xl font-semibold p-1 pb-2 px-3 mr-3 background-accent__item">
              P
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore</li>
            <li>Ut labore et dolore magna aliqua</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore</li>
            <li>Ut labore et dolore magna aliqua</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutWelcome;

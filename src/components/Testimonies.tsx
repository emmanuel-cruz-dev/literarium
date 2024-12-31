import Background from "../assets/images/testimonials-bg.jpg";

const Testimonies = () => {
  return (
    <section className="relative bg-black">
      <article>
        <img
          className="testimonies__background-image w-screen"
          src={Background}
          alt=""
        />
      </article>
    </section>
  );
};

export default Testimonies;

import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FormItem } from "../blog/BlogContent";

const ContactPage = () => {
  return (
    <section className="contact-page w-11/12 mx-auto py-12" id="contact-page">
      <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
        <h2 className="section__title">
          Get <span className="text__accent-color">in Touch</span> with us
        </h2>
        <p>
          We're here to assist you! Whether you have questions about our book
          selection, shipping options, or digital downloads, feel free to reach
          out anytime. Your love for books inspires us to serve better!
        </p>
      </div>
      <article className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 py-6">
        <FormItem title="Drop us an email" button="Your message" />
        <article className="flex flex-col gap-6 [&>div>h3]:text-2xl [&>div>h3]:uppercase [&>div>h3]:font-semibold leading-relaxed">
          <div>
            <h3>We're Always Here to Help!</h3>
            <p>
              At Literarium, we value your connection. Reach out to us for any
              inquiries about our physical store, online orders, shipping
              options, or digital book downloads. Our team is dedicated to
              making your experience smooth and enjoyable. Contact us today!
            </p>
          </div>
          <div>
            <h3>Our Contact Channels</h3>
            <div className="contact-page__icons flex gap-4 justify-center text-4xl">
              <span className="red">
                <BiWorld />
              </span>
              <span className="yellow">
                <BsTelephone />
              </span>
              <span className="skyblue">
                <MdEmail />
              </span>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default ContactPage;

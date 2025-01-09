import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FormItem } from "../blog/BlogContent";

const ContactContent = () => {
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
      <article className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pb-6 pt-8">
        <FormItem title="Drop us an email" button="Your message" />
        <article className="flex flex-col gap-8 [&>div>h3]:text-2xl [&>div>h3]:uppercase [&>div>h3]:font-semibold leading-relaxed">
          <div className="flex flex-col gap-4">
            <h3>We're Always Here to Help!</h3>
            <p>
              At Literarium, we value your connection. Reach out to us for any
              inquiries about our physical store, online orders, shipping
              options, or digital book downloads. Our team is dedicated to
              making your experience smooth and enjoyable. Contact us today!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Our Contact Channels</h3>
            <div className="contact-page__icons-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-around gap-4 text-center">
              <div className="contact-page__icons">
                <span className="red">
                  <BiWorld />
                </span>
                <div>
                  <h4>Address</h4>
                  <p>New York Street 12</p>
                </div>
              </div>
              <div className="contact-page__icons">
                <span className="yellow">
                  <BsTelephone />
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="contact-page__icons">
                <span className="skyblue">
                  <MdEmail />
                </span>
                <div>
                  <h4>Email</h4>
                  <p>literarium@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default ContactContent;

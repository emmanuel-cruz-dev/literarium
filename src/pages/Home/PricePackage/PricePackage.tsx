import pricePlans from "../../../data/pricePlans";
import laptopImg2 from "../../../assets/images/laptop2.avif";
import PriceCard from "./PriceCard";
import "../../../styles/pages/Home/pricePackage.css";

function PricePackage() {
  return (
    <section className="price-package" id="price-package">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="section__title">
            Find Your <span className="text__accent-color">Best Price</span>{" "}
            Package
          </h2>
          <p>
            Find the best prices for our premium book packages. You can purchase
            these packages and enjoy discounts on your book purchases.
          </p>
        </div>
        <article className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {pricePlans.map((plan) => (
              <PriceCard key={plan.id} {...plan} />
            ))}
          </div>
        </article>
      </article>
      <div className="price-package__background-image">
        <img
          src={laptopImg2}
          alt="Laptop"
          loading="lazy"
          width="891"
          height="33"
        />
      </div>
    </section>
  );
}

export default PricePackage;

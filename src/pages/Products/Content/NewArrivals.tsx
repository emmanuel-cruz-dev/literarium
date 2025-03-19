import { arrivalsData } from "../../../data/arrivalsData";

function NewArrivals() {
  return (
    <article className="new-arrivals__container flex flex-col gap-4">
      <h2 className="blog-content__aside__item-title">New Arrivals</h2>
      {arrivalsData.map((item, index) => (
        <article
          key={index}
          className="new-arrivals__card flex md:flex-col md:items-center lg:flex-row lg:items-start gap-4 border border-slate-300 p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <a
            href="#"
            className="new-arrivals__img-container w-20 flex-shrink-0"
          >
            <img
              className="new-arrivals__img w-full h-full object-cover"
              src={item.img}
              alt={`Portada de ${item.title}`}
              width="467"
              height="700"
              loading="lazy"
            />
          </a>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase font-bold text-black leading-tight">
              {item.title}
            </h2>
            <p className="text-sm">{item.text}</p>
          </div>
        </article>
      ))}
    </article>
  );
}

export default NewArrivals;

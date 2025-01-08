import { FC, useState } from "react";
import { CommentContentReview } from "../blog/BlogContent";

const tags = [
  "Ficción",
  "No ficción",
  "Fantasía",
  "Ciencia ficción",
  "Romance",
  "Misterio",
  "Suspenso",
  "Thriller",
  "Historia",
  "Biografía",
  "Autobiografía",
  "Ensayo",
  "Clásicos",
  "Infantil",
  "Juvenil",
  "Drama",
  "Horror",
  "Poesía",
  "Aventura",
  "Contemporáneo",
  "Filosofía",
  "Psicología",
  "Autoayuda",
  "Economía",
  "Desarrollo personal",
  "Tecnología",
  "Ciencia",
  "Política",
  "Arte",
  "Diseño gráfico",
  "Cocina",
  "Viajes",
  "Fotografía",
  "Manualidades",
  "Historietas",
  "Manga",
  "Novela gráfica",
  "Libros digitales",
];

interface TagItemProps {
  arr: string[];
}

const TagItem: FC<TagItemProps> = ({ arr }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {arr.map((item, index) => (
        <a
          href="#"
          className="border border-slate-300 py-2 px-3 uppercase font-semibold text-sm hover:bg-neutral-600 hover:text-white transition-colors duration-300 ease-in-out"
          key={index}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

const ProductTabs = () => {
  const [active, setActive] = useState<number | null>(1);

  const handleClick = (id: number) => {
    if (active === id) return;
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <article className="w-full">
      <div>
        <div className="flex gap-1">
          <button
            key={1}
            onClick={() => handleClick(1)}
            className={`${
              active === 1 ? "active" : ""
            } product-detail__tabs-btn__title`}
          >
            Description
          </button>
          <button
            key={2}
            onClick={() => handleClick(2)}
            className={`${
              active === 2 ? "active" : ""
            } product-detail__tabs-btn__title`}
          >
            Reviews
          </button>
          <button
            key={3}
            onClick={() => handleClick(3)}
            className={`${
              active === 3 ? "active" : ""
            } product-detail__tabs-btn__title`}
          >
            Tags
          </button>
          <button
            key={4}
            onClick={() => handleClick(4)}
            className={`${
              active === 4 ? "active" : ""
            } product-detail__tabs-btn__title`}
          >
            Custom Tab
          </button>
        </div>
        <div className="flex flex-col gap-3 text-lg border border-slate-300 py-10 px-8">
          {active === 1 && (
            <>
              <p>
                Cum altera mandamus in, mea verear disputationi et. Vel regione
                discere ut, legere expetenda ut eos. In nam nibh invenire
                similique. Atqui mollis ea his, ius graecis accommodare te. No
                eam tota nostrum cotidieque. Est cu nibh clita. Sed an nominavi
                maiestatis, et duo corrumpit constituto, duo id rebum lucilius.
                Te eam iisque deseruisse, ipsum euismod his at. Eu putent
                habemus voluptua sit, sit cu rationibus scripserit, modus
                voluptaria ex per. Aeque dicam consulatu eu his, probatus
                neglegentur disputationi sit et. Ei nec ludus epicuri petentium,
                vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet
                saperet nominavi est at, vel eu sumo tritani. Cum ex minim
                legere.
              </p>
              <p>
                Sed an nominavi maiestatis, et duo corrumpit constituto, duo id
                rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at.
                Eu putent habemus voluptua sit, sit cu rationibus scripserit,
                modus voluptaria ex per. Aeque dicam consulatu eu his, probatus
                neglegentur disputationi sit et. Ei nec ludus epicuri petentium,
                vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet
                saperet nominavi est at, vel eu sumo tritani. Cum ex minim
                legere.
              </p>
              <p>
                Ipsum euismod his at. Eu putent habemus voluptua sit, sit cu
                rationibus scripserit, modus voluptaria ex per. Aeque dicam
                consulatu eu his, probatus neglegentur disputationi sit et. Ei
                nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc
                exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo
                tritani. Cum ex minim legere.
              </p>
            </>
          )}

          {active === 2 && <CommentContentReview />}

          {active === 3 && <TagItem arr={tags} />}

          {active === 4 && (
            <>
              <p>
                Ipsum euismod his at. Eu putent habemus voluptua sit, sit cu
                rationibus scripserit, modus voluptaria ex per. Aeque dicam
                consulatu eu his, probatus neglegentur disputationi sit et. Ei
                nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc
                exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo
                tritani. Cum ex minim legere.
              </p>
              <p>
                Te eam iisque deseruisse, ipsum euismod his at. Eu putent
                habemus voluptua sit, sit cu rationibus scripserit, modus
                voluptaria ex per. Aeque dicam consulatu eu his, probatus
                neglegentur disputationi sit et. Ei nec ludus epicuri petentium,
                vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet
                saperet nominavi est at, vel eu sumo tritani. Cum ex minim
                legere.
              </p>
              <p>
                Sed an nominavi maiestatis, et duo corrumpit constituto, duo id
                rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at.
                Eu putent habemus voluptua sit, sit cu rationibus scripserit,
                modus voluptaria ex per. Aeque dicam consulatu eu his, probatus
                neglegentur disputationi sit et. Ei nec ludus epicuri petentium,
                vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet
                saperet nominavi est at, vel eu sumo tritani. Cum ex minim
                legere.
              </p>
              <p>
                Ipsum euismod his at. Eu putent habemus voluptua sit, sit cu
                rationibus scripserit, modus voluptaria ex per. Aeque dicam
                consulatu eu his, probatus neglegentur disputationi sit et. Ei
                nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc
                exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo
                tritani. Cum ex minim legere.
              </p>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductTabs;

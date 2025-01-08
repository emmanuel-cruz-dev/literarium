import { FC } from "react";

// const tabsContent = [
//   {
//     id: 1,
//     title: "Description",
//     text1:
//       "Cum altera mandamus in, mea verear disputationi et. Vel regione discere ut, legere expetenda ut eos. In nam nibh invenire similique. Atqui mollis ea his, ius graecis accommodare te. No eam tota nostrum cotidieque. Est cu nibh clita. Sed an nominavi maiestatis, et duo corrumpit constituto, duo id rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.",
//     text2:
//       "Sed an nominavi maiestatis, et duo corrumpit constituto, duo id rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.",
//     text3:
//       "Ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.",
//   },
//   {
//     id: 2,
//     title: "Custom Tab",
//     text1:
//       "Ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.",
//     text2:
//       "Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.",
//     text3:
//       "Sed an nominavi maiestatis, et duo corrumpit constituto, duo id rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.",
//     text4:
//       "Ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.",
//   },
// ];

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
  return (
    <article>
      <div className="flex flex-col gap-4">
        <h2>Tags</h2>
        <TagItem arr={tags} />
      </div>
      <div>
        <div className="flex gap-1">
          <button className="product-detail__tabs-btn__title active">
            Description
          </button>
          <button className="product-detail__tabs-btn__title">Reviews</button>
          <button className="product-detail__tabs-btn__title">Tags</button>
          <button className="product-detail__tabs-btn__title">
            Custom Tab
          </button>
        </div>
        <div className="flex flex-col gap-3 text-lg border border-slate-300 py-10 px-8">
          <p>
            Cum altera mandamus in, mea verear disputationi et. Vel regione
            discere ut, legere expetenda ut eos. In nam nibh invenire similique.
            Atqui mollis ea his, ius graecis accommodare te. No eam tota nostrum
            cotidieque. Est cu nibh clita. Sed an nominavi maiestatis, et duo
            corrumpit constituto, duo id rebum lucilius. Te eam iisque
            deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit,
            sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam
            consulatu eu his, probatus neglegentur disputationi sit et. Ei nec
            ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci
            utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum
            ex minim legere.
          </p>
          <p>
            Sed an nominavi maiestatis, et duo corrumpit constituto, duo id
            rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at. Eu
            putent habemus voluptua sit, sit cu rationibus scripserit, modus
            voluptaria ex per. Aeque dicam consulatu eu his, probatus
            neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis
            appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet
            nominavi est at, vel eu sumo tritani. Cum ex minim legere.
          </p>
          <p>
            Ipsum euismod his at. Eu putent habemus voluptua sit, sit cu
            rationibus scripserit, modus voluptaria ex per. Aeque dicam
            consulatu eu his, probatus neglegentur disputationi sit et. Ei nec
            ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci
            utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum
            ex minim legere.
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductTabs;

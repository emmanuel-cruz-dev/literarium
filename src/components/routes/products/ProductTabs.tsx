import { FC } from "react";

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
    <>
      {arr.map((item, index) => (
        <a
          href="#"
          className="border border-slate-300 py-2 px-3 uppercase font-semibold text-sm hover:bg-neutral-600 hover:text-white transition-colors duration-300 ease-in-out"
          key={index}
        >
          {item}
        </a>
      ))}
    </>
  );
};

const ProductTabs = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2>Tags</h2>
      <div className="flex gap-2 flex-wrap">
        <TagItem arr={tags} />
      </div>
    </div>
  );
};

export default ProductTabs;

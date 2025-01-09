import { FC } from "react";

interface PagesHeroProps {
  title: string;
}

const PagesHero: FC<PagesHeroProps> = ({ title }) => {
  return (
    <section className="pages-hero" id="pages-hero">
      <article className="w-11/12 h-full mx-auto flex flex-col justify-center gap-4 items-center text-center text-white">
        <h1 className="text-5xl uppercase font-bold">{title}</h1>
        <h2>Home / {title}</h2>
      </article>
    </section>
  );
};

export default PagesHero;

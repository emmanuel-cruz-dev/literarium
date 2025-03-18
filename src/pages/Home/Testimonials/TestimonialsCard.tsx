import { FC } from "react";
import { TestimonialsCardProps } from "../../../types/types";

const TestimonialsCard: FC<TestimonialsCardProps> = ({
  image,
  name,
  occupation,
  description,
}) => {
  return (
    <article className="flex flex-col gap-5 justify-center items-center h-full">
      <figure className="testimonies__card-container">
        <img
          className="object-cover"
          src={image}
          alt={name}
          width="300"
          height="300"
          loading="lazy"
        />
      </figure>
      <div className="flex flex-col gap-3 [&>h4]:uppercase justify-center text-center text-white">
        <h3 className="text__accent-color uppercase font-bold text-3xl">
          {name}
        </h3>
        <h4>{occupation}</h4>
        <p className="text-lg mb-12">"{description}"</p>
      </div>
    </article>
  );
};

export default TestimonialsCard;

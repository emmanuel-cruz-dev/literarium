import { useState } from "react";
import CommentContentReview from "../../OurBlog/Content/CommentContentReview";
import { tags } from "../../../constants/constants";
import TagItem from "./TagItem";

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
            } product-detail__tabs-btn__title hidden lg:block`}
          >
            Custom Tab
          </button>
        </div>
        <div className="flex flex-col gap-3 text-lg border border-slate-300 py-10 px-8">
          {active === 1 && (
            <>
              <p>
                A groundbreaking exploration of how thoughtful design can make
                everyday objects intuitive and user-friendly. Originally
                published in 1988 and updated in later editions, the book is a
                must-read for designers, engineers, and anyone interested in
                understanding the relationship between humans and the objects
                they use daily.
              </p>
              <p>
                Norman introduces the concept of user-centered design,
                emphasizing that the needs, abilities, and limitations of people
                should be at the forefront of the design process. Through
                relatable examples and engaging anecdotes, he highlights how
                poor design choices can lead to confusion, frustration, and
                inefficiency. From doors that don’t make it clear whether to
                push or pull, to appliances with overly complex controls, Norman
                sheds light on common design failures and their impact on our
                lives.
              </p>
              <p>
                One of the book’s core principles is the idea of affordances—the
                clues embedded in an object that suggest how it should be used.
                Norman also explores the importance of feedback and visibility,
                arguing that a well-designed object should communicate its
                purpose and provide users with clear indications of their
                actions.
              </p>
            </>
          )}

          {active === 2 && <CommentContentReview />}

          {active === 3 && <TagItem arr={tags} />}

          {active === 4 && (
            <>
              <p>
                Beyond critiquing poor design, Norman offers practical guidance
                for creating products that are functional, aesthetically
                pleasing, and enjoyable to use. His insights extend beyond
                physical objects to digital interfaces, making the book highly
                relevant in today's technology-driven world.
              </p>
              <p>
                The Design of Everyday Things is not just a manual for
                designers—it's a thought-provoking look at how better design can
                lead to a better world. Norman's witty and accessible writing
                makes complex design principles easy to understand, leaving
                readers with a deeper appreciation for the importance of good
                design in their everyday lives.
              </p>
              <p>
                The book is a must-read for anyone interested in design,
                technology, or the intersection of the two. It's a must-read for
                anyone who wants to understand how design can be used to create
                a better world.
              </p>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductTabs;

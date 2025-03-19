import founderMembers from "../../../data/founderMembers";
import FounderCard from "./FounderCard";

function Founders() {
  return (
    <section className="about-founders bg-neutral-200" id="about-founders">
      <article className="w-11/12 mx-auto py-12">
        <div className="flex flex-col gap-4 justify-center items-center text-center py-4">
          <h2 className="section__title">
            Meet <span className="text__accent-color">our</span> Founders
          </h2>
          <p>
            Meet the visionary minds behind our bookstore, passionate about
            literature, committed to the community and dedicated to offering
            readers a unique space to discover extraordinary stories.
          </p>
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 py-6">
          {founderMembers.map((member) => (
            <FounderCard key={member.id} {...member} />
          ))}
        </article>
      </article>
    </section>
  );
}

export default Founders;

import missionDetailsItems from "../../../data/missionDetailsItem";
import missionItems from "../../../data/missionItems";
import MissionRender from "./MissionRender";
import DetailsItem from "./DetailsItem";

function Mission() {
  return (
    <section className="about-mission" id="about-mission">
      <article className="w-11/12 mx-auto py-12">
        <div className="leading-relaxed text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div className="about-mission__accordion">
            {missionDetailsItems.map((item) => (
              <DetailsItem key={item.id} {...item} />
            ))}
          </div>
          <MissionRender arr={missionItems} />
        </div>
      </article>
    </section>
  );
}

export default Mission;

import tabsItems from "../../../data/tabsItems";
import TabsRender from "./TabsRender";

function Tabs() {
  return (
    <section
      className="about-tabs bg-gray-100 text-neutral-600"
      id="about-tabs"
    >
      <article className="w-11/12 mx-auto py-12" id="main-cards">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 py-6 font-thin">
          <TabsRender arr={tabsItems} />
        </div>
      </article>
    </section>
  );
}

export default Tabs;

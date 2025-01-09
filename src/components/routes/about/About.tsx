import PagesHero from "../PagesHero";
import AboutFounders from "./AboutFounders";
import AboutMedia from "./AboutMedia";
import AboutMission from "./AboutMission";
import AboutTabs from "./AboutTabs";
import AboutWelcome from "./AboutWelcome";

const About = () => {
  return (
    <>
      <PagesHero title="About" />
      <AboutWelcome />
      <AboutTabs />
      <AboutMedia />
      <AboutMission />
      <AboutFounders />
    </>
  );
};

export default About;

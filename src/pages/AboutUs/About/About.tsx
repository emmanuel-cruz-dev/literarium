import PagesHero from "../../../components/routes/PagesHero";
import Founders from "../Founders/Founders";
import Media from "../Media/Media";
import AboutMission from "../Mission/AboutMission";
import AboutTabs from "../Tabs/AboutTabs";
import AboutWelcome from "../Welcome/AboutWelcome";

const About = () => {
  return (
    <>
      <PagesHero title="About" />
      <AboutWelcome />
      <AboutTabs />
      <Media />
      <AboutMission />
      <Founders />
    </>
  );
};

export default About;

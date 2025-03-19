import PagesHero from "../../../components/routes/PagesHero";
import Founders from "../Founders/Founders";
import AboutMedia from "../Media/AboutMedia";
import AboutMission from "../Mission/AboutMission";
import AboutTabs from "../Tabs/AboutTabs";
import AboutWelcome from "../Welcome/AboutWelcome";

const About = () => {
  return (
    <>
      <PagesHero title="About" />
      <AboutWelcome />
      <AboutTabs />
      <AboutMedia />
      <AboutMission />
      <Founders />
    </>
  );
};

export default About;

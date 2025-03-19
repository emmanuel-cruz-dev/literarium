import PagesHero from "../../../components/routes/PagesHero";
import Founders from "../Founders/Founders";
import Media from "../Media/Media";
import Mission from "../Mission/Mission";
import AboutTabs from "../Tabs/AboutTabs";
import AboutWelcome from "../Welcome/AboutWelcome";

const About = () => {
  return (
    <>
      <PagesHero title="About" />
      <AboutWelcome />
      <AboutTabs />
      <Media />
      <Mission />
      <Founders />
    </>
  );
};

export default About;

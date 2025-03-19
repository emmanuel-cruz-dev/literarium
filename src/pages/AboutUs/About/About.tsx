import PagesHero from "../../PagesHero";
import Founders from "../Founders/Founders";
import Media from "../Media/Media";
import Mission from "../Mission/Mission";
import Tabs from "../Tabs/Tabs";
import Welcome from "../Welcome/Welcome";

const About = () => {
  return (
    <>
      <PagesHero title="About" />
      <Welcome />
      <Tabs />
      <Media />
      <Mission />
      <Founders />
    </>
  );
};

export default About;

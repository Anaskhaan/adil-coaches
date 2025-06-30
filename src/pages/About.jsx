import { AboutUsBanner } from "../components/About/AboutUsBanner";
import { CEOMessage } from "../components/About/CEOMessage";
import { MissionVision } from "../components/About/MissionVision";
import { PremiumCTA } from "../components/About/PremiumCTA";

export const About = () => {
  return <div>
    <AboutUsBanner/>
    <CEOMessage/>
    <MissionVision/>
    <PremiumCTA/>
  </div>;
};

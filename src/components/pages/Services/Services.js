import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjTwo } from "./Data";

const Services = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
    </>
  );
};

export default Services;

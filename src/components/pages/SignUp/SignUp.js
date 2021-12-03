import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjThree } from "./Data";

const SignUp = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjThree} />
    </>
  );
};

export default SignUp;

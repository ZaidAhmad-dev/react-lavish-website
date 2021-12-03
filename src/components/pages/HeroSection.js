import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({
  lightBg,
  lightText,
  lightTextDesc,
  buttonLabel,
  imgSrc,
  imgAlt,
  title,
  description,
  buttonLink,
  buttonTarget,
  headline,
  imgStart,
  topLine,
}) => {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightTextDesc ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
              <Link to="/sign-up">
                <Button buttonSize="btn--wide" buttonColor="blue">
                  {buttonLabel}
                </Button>
              </Link>
            </div>

            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={imgSrc} alt={imgAlt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;

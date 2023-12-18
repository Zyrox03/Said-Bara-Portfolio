import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Hero = ({ setWatchingVideo }) => {
  const { t } = useTranslation();

  return (
    <section
      id="Hero"
      className="md:mt-12 flex justify-start items-center gap-12 relative "
      style={{ zIndex: 100, height: '80vh' }}
    >
      <div className="hidden sm:flex blur bg-blur blur-animate"></div>
      <div className="blur bg-blur-2 blur-animate"></div>

      
      <div
        className="max-w-4xl text-white text-start flex flex-col px-12 justify-center items-start gap-4 md:gap-12"
        data-aos="zoom-out-up"
        data-aos-duration="750"
      >
        <h1 className="FadeInTextAnimation text-xl  sm:text-4xl md:text-5xl lg:text-6xl bright-heading">
          {t("hero.title")
            .split(" ")
            .map((word, index) => (
              <>
                <span key={index}> {word} </span>{" "}
              </>
            ))}
        </h1>

        <div className="FadeInTextAnimation text-md sm:text-xl lg:text-2xl sub-heading">
          {/* {t("hero.description")} */}
          {t("hero.description")
            .split(" ")
            .map((word, index) => (
              <>
                <span key={index}> {word} </span>{" "}
              </>
            ))}
        </div>
        <div className="flex items-center flex-wrap gap-4">
          <Link to="/request-a-quote">
            <button className="main_button">
              {t("buttons.request-a-quote")}
            </button>
          </Link>{" "}
          <button
            onClick={() => setWatchingVideo(true)}
            className="secondary_button"
          >
            {t("buttons.watch-video")}
          </button>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  setWatchingVideo: PropTypes.func.isRequired,
};

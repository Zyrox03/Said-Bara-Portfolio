import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { LanguageSwitcher } from "../Widgets/LanguageSwitcher";

export const NavBar = ({ setShowNavPage }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const body = document.querySelector("body");

  const openNavigation = () => {
    setShowNavPage(true);
    body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust the scroll threshold based on your design
      const scrollThreshold = 50;

      // Check if the scroll position is greater than the threshold
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts



  return (
    <nav
      className={`flex px-2 sm:px-6 justify-between items-center transform-transition duration-500 ${
        isScrolled ? "py-3 bg-opacity-50 backdrop-blur-md shadow-md" : "py-6 "
      } fixed w-full`}
      style={{ zIndex: 999 }}
    >
      {" "}
      <ScrollLink to={"Hero"} smooth={true} duration={500} offset={-50}>
        <div>
          <h1 className={`FadeInTextAnimation text-2xl  md:text-4xl text-white font-bold cursor-pointer `}>
          <span>Said</span> {" "}
              <span>Bara</span>
          </h1>
        </div>
      </ScrollLink>
      <div className="flex justify-end items-center flex-wrap-reverse gap-2 sm:gap-4">
        <Link to="/request-a-quote">
          <button className="main_button ">
            {t("buttons.request-a-quote")}
          </button>
        </Link>
        <button onClick={openNavigation} className="secondary_button ">
          <i className="fa-solid fa-bars"></i>
        </button>

        <LanguageSwitcher />
      </div>
    </nav>
  );
};

// Define PropTypes for the component
NavBar.propTypes = {
  setShowNavPage: PropTypes.func.isRequired,
};

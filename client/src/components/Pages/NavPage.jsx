import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export const NavPage = ({ showNavPage, setShowNavPage }) => {
  const body = document.querySelector("body");

  const { t } = useTranslation();

  const closeNavigation = () => {
    setShowNavPage(false);
    body.style.overflow = "auto";
  };

  const navLinks = [
    { name: t("hero.sectionTitle"), link: "Hero" },
    { name: t("aboutMe.sectionTitle"), link: "AboutMe" },
    { name: t("projects.sectionTitle"), link: "Projects" },
    { name: t("services.sectionTitle"), link: "Services" },
    { name: t("skills.sectionTitle"), link: "Skills" },
    { name: t("contact.sectionTitle"), link: "Contact" },
  ];

  const [isShortHeight, setIsShortHeight] = useState(window.innerHeight < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsShortHeight(window.innerHeight < 600);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`navPage gradient h-screen w-full fixed flex text-black transform transition overflow-y-scroll duration-500 no_scrollBar  ${
        showNavPage ? "translate-y-0" : "-translate-y-full"
      }  `}
      style={{ zIndex: 1001 }}
    >
     

      <div className="w-full  px-2 sm:px-6 py-3  flex  items-center flex-col  ">
        <div className="flex  justify-between items-center w-full">

        <h1 onClick={closeNavigation} className="text-3xl sm:text-4xl text-white font-bold py-3 cursor-pointer">
          Said Bara
        </h1>

        <div className="flex justify-end flex-wrap-reverse gap-2 sm:gap-4">
          <button onClick={closeNavigation} className="secondary_button ">
            <i className="fa-solid fa-close"></i>
          </button>
        </div>
        </div>

      {isShortHeight ? (
        <div className="flex flex-col gap-6 items-center justify-center  h-full  no_scrollBar w-full overflow-y-scroll">
          <div className="w-full text-3xl gap-6 flex flex-wrap justify-center items-center">
            {navLinks.map(({ name, link }, index) => (
              <ScrollLink
                key={index}
                className="w-32 sm:w-64 clickable_card bg-white text-center"
                to={link}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => closeNavigation()}
              >
                {name}
              </ScrollLink>
            ))}
          </div>
        </div>
      ) : (
        // LONG HEIGHT
        <div className="flex items-center justify-center min-h-[500px] h-full  no_scrollBar w-full overflow-y-scroll pb-4">
          <div className="flex justify-around gap-6 items-center w-full h-full p-12">
            <img
              src="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp"
              className="flex-1 w-1/2 hidden rounded-3xl lg:flex object-cover "
              alt=""
            />

            <div className="md:flex-1 md:w-1/2 w-full  text-3xl gap-6 flex flex-col justify-center items-center">
              {navLinks.map(({ name, link }, index) => (
                <ScrollLink
                  key={index}
                  className="w-full sm:w-96 clickable_card bg-white text-center"
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  onClick={() => closeNavigation()}
                >
                  {name}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

// Define PropTypes for the component
NavPage.propTypes = {
  showNavPage: PropTypes.bool.isRequired,
  setShowNavPage: PropTypes.func.isRequired,
};

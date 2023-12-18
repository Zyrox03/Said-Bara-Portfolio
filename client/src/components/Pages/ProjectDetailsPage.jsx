import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
import { useTranslation } from "react-i18next";
// import styles bundle
import "swiper/css/bundle";
import { Title } from "../layouts/Title";
import { ProjectComments } from "../../Widgets/ProjectComments";

export const ProjectDetailsPage = ({
  showProject,
  setShowProject,
  showCommentForm,
  newCommentText,
  setNewCommentText,
}) => {
  const [activeTab, setActiveTab] = useState("overview");
  const body = document.querySelector("body");
  const { t } = useTranslation();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const closeProjectDetails = () => {
    setShowProject(null);
    body.style.overflow = "auto";
  };

  // SWIPER
  useEffect(() => {
    // Initialize Swiper inside the useEffect function
    const swiper = new Swiper(".swiper-project", {
      direction: "horizontal",

      autoplay: {
        delay: 4000,
      },

      navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },

      spaceBetween: 5,
      pagination: {
        el: ".custom-pagination-container",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<div class="' +
            className +
            ' inline-block mx-1 cursor-pointer p-1 sm:p-2 bg-blue-500 border border-gray-300 rounded transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white"> ' +
            " </div>"
          );
        },
      },
      on: {
        slideChange: function () {
          var activeIndex = swiper.realIndex;
          var paginationButtons = document.querySelectorAll(
            ".custom-pagination-button"
          );
          paginationButtons.forEach(function (button, index) {
            button.classList.toggle("active", index === activeIndex);
            button.classList.toggle("animated", index === activeIndex);
          });
        },
      },

      scrollbar: {
        el: ".swiper-scrollbar",
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

    // Destroy Swiper when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []); // The empty dependency array ensures this runs only once after component mount

  return (
    <div
      className={`gradient text-white  h-screen overflow-y-scroll no_scrollBar bg-white w-full fixed text-black transform transition duration-300 ${
        showProject ? "translate-y-0" : "translate-y-full"
      }  `}
      style={{ zIndex: 1000 }}
    >
      <div className={`flex flex-col h-full w-full gap-6 p-8`}>
        <div className="flex justify-between w-full gap-3">
          <h1 className="text-3xl lg:text-5xl"> {showProject?.name} </h1>

          <button onClick={closeProjectDetails} className="secondary_button">
            <p className="hidden lg:flex">{t("buttons.closeProject")}</p>
            <p className=" lg:hidden">
              <i className=" fa-solid fa-xmark"></i>{" "}
            </p>
          </button>
        </div>
        <p className="text-xl lg:text-2xl"> {showProject?.description} </p>
        <div className="flex gap-4">
          {showProject?.liveDemoLink && (
            <a
              href={showProject?.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="main_button uppercase">Live Demo</button>
            </a>
          )}
          {showProject?.githubLink && (
            <a
              href={showProject?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="secondary_button ">
                <i className="fa-brands fa-github text-3xl"></i>
              </button>
            </a>
          )}
        </div>

        <div className="w-full flex flex-wrap xl:flex-nowrap gap-12">
          <div className="w-full  ">
            <div className="flex flex-col w-full gap-12 text-white">
              <div className=" flex w-full justify-around  border-b-2 border-b-gray-300/50 text-sm lg:text-lg md:text-2xl relative">
                <button
                  className={`w-1/3 px-4 font-bold  hover:opacity-100 transition py-3 uppercase flex justify-center items-center ${
                    activeTab === "overview" ? "opacity-100 " : "opacity-70"
                  } `}
                  onClick={() => handleTabClick("overview")}
                >
                  {t("buttons.overview")}
                </button>
                <button
                  className={`w-1/3 px-4  font-bold hover:opacity-100 transition py-3 uppercase flex justify-center items-center ${
                    activeTab === "tech" ? "opacity-100 " : "opacity-70"
                  } `}
                  onClick={() => handleTabClick("tech")}
                >
                  {t("buttons.tech")}
                </button>
                <button
                  className={`w-1/3 px-4 font-bold  hover:opacity-100 transition py-3 uppercase flex justify-center items-center ${
                    activeTab === "features" ? " opacity-100" : "opacity-70"
                  } `}
                  onClick={() => handleTabClick("features")}
                >
                  {t("buttons.features")}
                </button>

                <div
                  className={`white-border bg-white h-[2px] w-1/3 absolute bottom-[-2px] transition-transform duration-500 ${
                    activeTab === "overview"
                      ? "-translate-x-full"
                      : activeTab === "tech"
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                >
                  <div className="arrow-indicator absolute bottom-full right-1/2"></div>
                </div>
              </div>

              {activeTab === "overview" && (
                <div className="w-full flex justify-center " data-aos="fade-up">
                  <p
                    className="text-md lg:text-lg"
                    dangerouslySetInnerHTML={{
                      __html: showProject?.overview.replace(/\n/g, "<br>"),
                    }}
                  ></p>
                </div>
              )}

              {activeTab === "tech" && (
                <div className="w-full flex justify-center " data-aos="fade-up">
                  <ul className=" grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-white">
                    {showProject &&
                      showProject.techs.map((tech) => (
                        <li
                          key={tech}
                          className="text-sm lg:text-lg p-2 col-span-1 h-fit bg-blue-600 rounded-md hover:bg-blue-600 transition duration-300 text-center "
                        >
                          {tech}
                        </li>
                      ))}
                  </ul>
                </div>
              )}

              {activeTab === "features" && (
                <div className="w-full flex justify-center " data-aos="fade-up">
                  <ul className="list-disc w-full text-white">
                    {showProject &&
                      showProject.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-md lg:text-lg p-2 text-start"
                        >
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className=" w-full swiper-project h-fit overflow-hidden relative rounded-lg  ">
            <div className="swiper-wrapper h-fit">
              {showProject &&
                showProject.images.map(
                  (image, index) =>
                    index > 0 && (
                      <div
                        key={index}
                        className="swiper-slide w-full bg-gradient-to-r from-blue-800 to-transparent cursor-grab active:cursor-grabbing"
                      >
                        {" "}
                        <img
                          src={image}
                          className="h-full flex object-fill scale-[1.025]  "
                          alt=""
                        />{" "}
                        <div></div>
                      </div>
                    )
                )}
            </div>
            <div className="swiper-pagination custom-pagination-container"></div>
          </div>
        </div>

        <div className="w-full lg:w-[75%] mx-auto rounded-md lg:p-4 flex flex-col gap-6 ">
          <Title title={t("comment.sectionTitle")} />

          <ProjectComments
            projectID={showProject?.name}
            showCommentForm={showCommentForm}
            newCommentText={newCommentText}
            setNewCommentText={setNewCommentText}
          />
        </div>
      </div>{" "}
    </div>
  );
};
// Define PropTypes for the component
ProjectDetailsPage.propTypes = {
  showProject: PropTypes.object,
  setShowProject: PropTypes.func.isRequired,
  showCommentForm: PropTypes.func.isRequired,
  newCommentText: PropTypes.string,
  setNewCommentText: PropTypes.func.isRequired,
};

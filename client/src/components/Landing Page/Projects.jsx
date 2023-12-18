import PropTypes from "prop-types";
import { Title } from "../layouts/Title";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

export const Projects = ({ setShowProject }) => {
  const body = document.querySelector("body");

  const handleProjectClick = (selectedProject) => {
    body.style.overflow = "hidden";

    setShowProject(selectedProject);
  };

  



  const { t } = useTranslation();
const [projectHovered,setProjectHovered] = useState(false)
  return (
    <section id="Projects" className=" flex flex-col justify-center px-4 py-12 items-center gap-12  relative "
    style={{zIndex: 100}}
  >

<div className="hidden sm:flex blur bg-blur blur-animate"></div>
<div className="blur bg-blur-2 blur-animate"></div>
<div className="blur bg-blur-3 blur-animate"></div>
<div className="blur bg-blur-4 blur-animate"></div>

       <Title
        section={t('projects.sectionTitle')}
        title={t('projects.mainTitle')}
        sub_title={t('projects.subTitle')}
      />

      {/* project cards */}
      <div className=" flex justify-center flex-wrap w-full gap-12 ">
        {t('projects.projectList', { returnObjects: true }).map((project, index) => (
          <div
            key={index}
            className={`max-w-md  flex flex-col items-end rounded-lg sm:mx-12 silver overflow-hidden p-3 shadow-md shadow-slate-200 `}
            data-aos="zoom-out-up"
            data-aos-duration="750"
          >
            <img
              // id="service_background"
              src={project.images[0]}
              alt={`Card`}
              className={`max-h-[300px] w-full h-full transform-transition duration-[3000ms] object-cover ease-in-out ${projectHovered === project.name ? ' object-bottom': 'object-top'} rounded-lg cursor-pointer`}
              onClick={() => {
                handleProjectClick(project);
              }}
              onMouseEnter={()=>setProjectHovered(project.name)}
              onMouseLeave={()=>setProjectHovered(false)}
              style={{
                zIndex: 1,
              }}
            />

            <div
              className={`w-full flex flex-col gap-3 p-6`}
              style={{
                zIndex: 2,
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-cyan-500"> {project.name} </h3>
             
              <p className="text-md sm:text-lg text-gray-500">{project.description}</p>
              <div className="flex gap-3">
                <button
                 onClick={() => {
                  handleProjectClick(project);
                }}
                  className="secondary_button"
                >
                  {t("buttons.viewMore")}
                </button>
              </div>
            </div>
          </div>
        ))}
       
      </div>
      <Link to='/request-a-quote'>
      <button className="main_button">{t('buttons.request-a-quote')}</button>
        </Link> 
    </section>
  );
};

// Define PropTypes for the component
Projects.propTypes = {
  setShowProject: PropTypes.func.isRequired,
};

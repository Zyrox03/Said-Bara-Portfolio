import { useState } from "react";
import { Title } from "../layouts/Title";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const { t } = useTranslation();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const skillsData = {
    "Front End": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
      "Tailwind",
      "Redux",
      "Material UI",
      "EJS",
      "Material Tailwind",
      "Redux Toolkit",
    ],
    "Back End": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Firebase",
      "PayPal API",
      "Cloudinary",
      "Passport",
      "Multer",
      "JOI",
    ],
    Other: ["Git/GitHub", "Mapbox", "EmailJS", "Figma", "Vite", "..."],
  };

  return (
    <section id="Skills" className="flex flex-col justify-center px-4 py-12 items-center gap-12">

      {/* Heading title */}
      <Title
        section={t('skills.sectionTitle')}
        title={t('skills.mainTitle')}
        sub_title=""
      />

      {/* skill tabs */}
      <div className="flex flex-col w-full gap-12 text-white">
        <div className=" flex w-full justify-around  border-b-2 border-b-gray-300/50 text-lg md:text-2xl relative">
          <button
            className={`w-1/3 px-4 font-bold  hover:opacity-100 transition py-3 uppercase flex justify-center items-center ${
              activeTab === "frontend" ? "opacity-100 " : "opacity-70"
            } `}
            onClick={() => handleTabClick("frontend")}
          >
            Frontend
          </button>
          <button
            className={`w-1/3 px-4  font-bold hover:opacity-100 transition py-3 uppercase flex justify-center items-center ${
              activeTab === "backend" ? "opacity-100 " : "opacity-70"
            } `}
            onClick={() => handleTabClick("backend")}
          >
            Backend
          </button>
          <button
            className={`w-1/3 px-4 font-bold  hover:opacity-100 transition py-3 uppercase flex justify-center items-center ${
              activeTab === "other" ? " opacity-100" : "opacity-70"
            } `}
            onClick={() => handleTabClick("other")}
          >
            {t('buttons.other')}
          </button>

          <div
            className={`white-border bg-white h-[2px] w-1/3 absolute bottom-[-2px] transition-transform duration-500 ${
              activeTab === "frontend"
                ? "-translate-x-full"
                : activeTab === "backend"
                ? "translate-x-0"
                : "translate-x-full"
            }`}
          >
            <div className="arrow-indicator absolute bottom-full right-1/2"></div>
          </div>
        </div>

        {activeTab === "frontend" && (
          <div className="w-full flex justify-center" data-aos="fade-up">
            <ul className=" grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-white">
              {skillsData["Front End"].map((skill) => (
                <li
                  key={skill}
                  className="text-lg p-2 col-span-1 h-fit bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 text-center"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "backend" && (
          <div className="w-full flex justify-center" data-aos="fade-up">
            <ul className=" grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-white">
              {skillsData["Back End"].map((skill) => (
                <li
                  key={skill}
                  className="text-lg p-2 col-span-1 h-fit bg-green-500 rounded-md hover:bg-green-700 transition duration-300 text-center"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "other" && (
          <div className="w-full flex justify-center" data-aos="fade-up">
            <ul className=" grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-white">
              {skillsData["Other"].map((skill) => (
                <li
                  key={skill}
                  className="text-lg p-2 col-span-1 h-fit bg-pink-500 rounded-md hover:bg-pink-700 transition duration-300 text-center"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link to='/request-a-quote'>
      <button className="main_button">{t('buttons.request-a-quote')}</button>
        </Link>
    </section>
  );
};

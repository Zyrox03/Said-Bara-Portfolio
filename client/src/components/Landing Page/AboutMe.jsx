// Import the translation function
import { useTranslation } from "react-i18next";
import { TypeAnimation } from 'react-type-animation';

export const AboutMe = () => {
  // UseTranslation hook to access the t function
  const { t } = useTranslation();

  return (
    <section
      id="AboutMe"
      className="flex flex-col justify-center px-4 items-center gap-12 relative "
      style={{ zIndex: 100 }}
    >
      {/* About Me Content */}
      <div className="w-full flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-8 p-6">
        <div className="flex-1 h-full w-full ">

          <div className=" bg-gradient-to-tr from-[#ec4899] to-[#5468ff] lg:max-w-lg p-2 rounded-3xl shadow-lg ">

          <img
            src="https://res.cloudinary.com/duh30yscb/image/upload/v1702759086/SaidBaraPortfolio/Me_TopG_2_sgaj67.webp"
            alt=""
            className="mx-auto rounded-3xl shadow-lg h-full w-full "
            data-aos="fade-right"
            data-aos-duration="750"
            />
            </div>
        </div>
        <div className="flex-1">
          {/* Heading title */}
          <div className="flex flex-col items-center md:items-start  md:text-center gap-1 ">
            <p className="text-xl font-bold text-white">{t("aboutMe.title")}</p>
            <h2
              className=" text-2xl sm:text-3xl md:text-4xl text-start text-white font-bold"
              data-aos="fade-up"
            >
              <TypeAnimation
                sequence={[
                  "Hello World !",
                  2000,
                  t('aboutMe.sequence1'),
                  3000, 
                  t('aboutMe.sequence2'),
                  3000,
                 t('aboutMe.sequence3'),
                  3000,
                 t('aboutMe.sequence4'),
                  3000,
                 
                ]}
                wrapper="span"
                speed={5}
                deletionSpeed={1}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />

              
            </h2>
          </div>

          <p className="text-lg md:text-2xl text-white mt-4">
            {t("aboutMe.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

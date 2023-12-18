import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Featured = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  return (
    <section
      id="Featured"
      className="bg-slate-100 flex flex-col justify-center  py-12 items-center gap-12 text-cyan-500 pb-12"
    >
      {/* Heading title */}
      <div className="flex flex-col items-center  gap-1 text-center px-4">
        <p className="text-xl font-bold text-gray-500">
          {t("featured.sectionTitle")}
        </p>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          data-aos="fade-up"
        >
          {t("featured.mainTitle")}
        </h2>
        <p className="text-lg lg:text-2xl text-gray-500 my-4">
          {t("featured.subTitle")}
        </p>

        <div className="flex items-center gap-12  text-2xl">
          <span> {t('buttons.before')} </span>
          <i className="fas fa-arrow-right"></i>
          <span> {t('buttons.after')} </span>
        </div>
      </div>

      {/* featured projects */}
      <div
        className={`w-full md:px-4 ${
          showAll ? "h-full " : "h-[30vh] md:h-[50vh] "
        } flex justify-center items-center flex-wrap overflow-hidden border-b-4 border-b-cyan-300`}
      >
        <img
          src="https://res.cloudinary.com/duh30yscb/image/upload/v1702506615/SaidBaraPortfolio/featured_feg8dt.webp"
          alt=""
        />
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="text-2xl  border-b-4 border-b-cyan-300"
      >
        {showAll ? t("featured.hideBtn") : t("featured.showBtn")}
      </button>


    </section>
  );
};

import { useTranslation } from "react-i18next";
import { Title } from "../layouts/Title";
export const BeforeAfterPoints = () => {
  const { t } = useTranslation();
  

  return (
    <section
      id="Services"
      className=" flex flex-col justify-center px-4 py-12 items-center gap-12"
    >
      <Title
        section={t("painPoints.sectionTitle")}
        title={t("painPoints.mainTitle")}
        sub_title={t("painPoints.subTitle")}
      />
      <div className="w-full flex items-start justify-center  ">
        <div className="flex-1 h-full flex justify-center ">
          <ol className="flex flex-col">
            {t('painPoints.problemSolution',{returnObjects: true} ).map(({ painPoint, desiredSolution }, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-12 mb-8 md:mb-4"
              >
                <span
                  className="flex-1 flex gap-2 text-slate-200 items-center text-md md:text-lg "
                  data-aos-duration="750"
                  data-aos="fade-right"
                >
                  <i className="fa fa-circle-xmark text-red-500 text-lg flex items-center"></i>
                  {painPoint}
                </span>
                <span
                  className="flex-1 flex gap-2 text-slate-200 items-center text-md md:text-lg "
                  data-aos-duration="750"
                  data-aos="fade-left"
                >
                  <i className="fa fa-circle-check text-green-500 text-lg flex items-center"></i>
                  {desiredSolution}
                </span>{" "}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

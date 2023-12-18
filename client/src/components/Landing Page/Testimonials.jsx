// import Swiper bundle with all modules installed
import { useEffect } from "react";
import Swiper from "swiper/bundle";
import { useTranslation } from 'react-i18next';


// import styles bundle
import "swiper/css/bundle";
import { Title } from "../layouts/Title";

export const Testimonials = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize Swiper inside the useEffect function
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,

      autoplay: {
        delay: 5000,
      },

      effect: "cube",
      cubeEffect: {
        slideShadows: true,
      },

      perSlideOffset: "0",
      perSlideRotate: "0",
      slideShadows: false,

      navigation: {
        nextEl: ".next-arrow",
        prevEl: ".prev-arrow",
      },

      pagination: {
        el: ".swiper-pagination",
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
    <section
      id="Testimonials"
      className="flex flex-col justify-center px-4 py-12 items-center gap-12 
      relative"
      style={{zIndex: 100}}
    >
  
  <div className="hidden sm:flex blur bg-blur blur-animate"></div>
  <div className="blur bg-blur-2 blur-animate" ></div>
      <Title
        section={t('testimonials.sectionTitle')}
        title={t('testimonials.mainTitle')}
        sub_title=""
      />

      <div className=" flex justify-center flex-wrap gap-12 w-full">
        <div className="swiper w-[90%] sm:w-[80%] ">
          <div className="swiper-wrapper ">
            {t('testimonials.testimonialsList', { returnObjects: true }).map(({ quote, author, position }, index) => (
              <div key={index} className="swiper-slide">
                <div
                  key={index}
                  className=" bg-slate-100 h-full p-4 sm:p-8 flex flex-col justify-between shadow-md mb-8 text-center relative"
                >
                  <p className="text-cyan-500 font-semibold">{author}</p>

                  <p className="text-md sm:text-lg text-gray-800 leading-relaxed mb-4">
                    {quote}
                  </p>

                  <div>
                    <p className="text-gray-600">{position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PREV AND NEXT BUTTONS */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather next-arrow hidden sm:flex"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather prev-arrow hidden sm:flex"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

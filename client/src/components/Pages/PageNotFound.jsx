import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div
      className="text-center flex flex-col justify-center items-center gap-8 h-screen w-full gradient overflow-hidden p-8 relative "
      style={{ zIndex: 100 }}
    >
      <Helmet>
        {/* Title */}
        <title> {`${t("pageNotFound.mainTitle")} | Said Bara`}</title>

        {/* Description */}
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Explore Said Bara's portfolio for exciting projects and web development content."
        />

        {/* Open Graph meta tags for social sharing */}
        <meta
          property="og:title"
          content={`${t("pageNotFound.mainTitle")} | Said Bara`}
        />
        <meta
          property="og:description"
          content="Oops! The page you're looking for doesn't exist. Explore Said Bara's portfolio for exciting projects and web development content."
        />
        <meta property="og:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta
          name="twitter:title"
          content={`${t("pageNotFound.mainTitle")} | Said Bara`}
        />
        <meta
          name="twitter:description"
          content="Oops! The page you're looking for doesn't exist. Explore Said Bara's portfolio for exciting projects and web development content."
        />

        <meta name="twitter:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Additional meta tags */}
        <meta
          name="keywords"
          content="Page Not Found, 404, Said Bara, Portfolio, Web Development, MERN stack, React, Node.js, Express, Frontend, Backend"
        />
        <meta name="author" content="Said Bara" />
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="hidden sm:flex blur bg-blur blur-animate"></div>
      <div className="blur bg-blur-2 blur-animate"></div>

      <h1 className="text-5xl md:text-7xl  text-white font-bold">
        404 - {t("pageNotFound.mainTitle")}
      </h1>
      <p className="text-slate-200 text-xl">{t("pageNotFound.subTitle")}</p>
      <Link to="/">
        <button className="secondary_button">{t("hero.sectionTitle")}</button>
      </Link>
    </div>
  );
};

import { Link } from "react-router-dom";
import { NavBarMin } from "../NavBarMin";
import { Helmet } from "react-helmet";

export const Admin = () => {
  return (
    <div
      className="text-center flex flex-col justify-start items-center gap-8 h-screen w-full gradient overflow-hidden relative "
      style={{ zIndex: 100 }}
    >

<Helmet>
  {/* Title */}
  <title>Admin | Said Bara</title>

  {/* Description */}
  <meta
    name="description"
    content="Admin page for Said Bara's portfolio website. Manage projects, services, and interact with user inquiries."
  />

  {/* Open Graph meta tags for social sharing */}
  <meta property="og:title" content="Admin | Said Bara" />
  <meta
    property="og:description"
    content="Admin page for Said Bara's portfolio website. Manage projects, services, and interact with user inquiries."
  />
  <meta property="og:url" content="saidbara.pages.dev/admin" />
  <meta property="og:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
  <meta property="og:type" content="website" />

  {/* Twitter Card meta tags for Twitter sharing */}
  <meta name="twitter:title" content="Admin | Said Bara" />
  <meta
    name="twitter:description"
    content="Admin page for Said Bara's portfolio website. Manage projects, services, and interact with user inquiries."
  />
  <meta name="twitter:url" content="saidbara.pages.dev/admin" />
  <meta name="twitter:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Additional meta tags */}
  <meta
    name="keywords"
    content="Admin, Portfolio, Project Management, Service Management, User Inquiries, MERN stack, Web Development, React, Node.js, Express"
  />
  <meta name="author" content="Said Bara" />
  <meta name="robots" content="noindex, nofollow" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Helmet>

            <div className="hidden sm:flex blur bg-blur blur-animate"></div>
      <div className="blur bg-blur-2 blur-animate"></div>

      <NavBarMin />

      <div className="flex items-center gap-12 p-4">
        {/* COMMENTS */}
        <div className="max-w-md mx-auto bg-slate-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 hover:bg-slate-200"   data-aos="zoom-out-up"
                  data-aos-duration="750">
          <div className="p-8">
            <i className="fa-regular fa-comments text-5xl text-pink-500 mb-4"></i>
            <h2 className="text-3xl font-semibold text-gray-800">
              Manage Comments
            </h2>
          </div>
          <div className="px-8 py-4 ">
            <p className="text-gray-700 text-md md:text-xl">
              Click below to manage comments on your website.
            </p>
          </div>
          <div className="px-8 py-4">
            <Link to="/admin/comments">
              <button className="main_button">Go to Comments</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

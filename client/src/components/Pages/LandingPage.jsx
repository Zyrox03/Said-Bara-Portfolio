import { useEffect, useState } from "react";
import { Projects } from "../Landing Page/Projects";
import { Services } from "../Landing Page/Services";
import { NavBar } from "../NavBar";
import { NavPage } from "./NavPage";
import { Hero } from "../Landing Page/Hero";
import { Featured } from "../Landing Page/Featured";
import { Skills } from "../Landing Page/Skills";
import { Testimonials } from "../Landing Page/Testimonials";
import { Footer } from "../Footer";
import { Contact } from "../Landing Page/Contact";
import { AboutMe } from "../Landing Page/AboutMe";
import { Modal } from "../layouts/Modal";
import { Quiz } from "../../Widgets/Quizz";
import { Notification } from "../layouts/Notification";
import { CommentForm } from "../../Widgets/CommentForm";
import { ProjectDetailsPage } from "./ProjectDetailsPage";
// ..
import { useTranslation } from "react-i18next"; // Import the translation hook
import { BeforeAfterPoints } from "../Landing Page/BeforeAfter";
import { WatchVideo } from "../../Widgets/WatchVideo";

import Helmet from "react-helmet";
const LandingPage = () => {
  const { t } = useTranslation(); // Use the translation hook

  const body = document.querySelector("body");

  const [showProject, setShowProject] = useState(null);
  const [showNavPage, setShowNavPage] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);

  // MODAL
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [showCommentModel, setShowCommentModel] = useState(false);

  const openModal = () => {
    body.style.overflow = "hidden";
    setNotificationOpen(false);
    setModalOpen(true);
  };

  const showCommentForm = () => {
    body.style.overflow = "hidden";
    setShowCommentModel(true);
  };

  const closeModal = () => {
    body.style.overflow = "auto";
    setModalOpen(false);
    setShowCommentModel(false);
    setNewCommentText("");
  };
  const openNotification = () => {
    setNotificationOpen(true);
  };

  const closeNotification = () => {
    setNotificationOpen(false);
  };

  useEffect(() => {
    // Define your function to be called after 10 seconds

    // Set a timeout to call your function after 10 seconds
    const timeoutId = setTimeout(openNotification, 15000);

    // Clear the timeout if the component is unmounted before the 10 seconds
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  const [newCommentText, setNewCommentText] = useState("");

  const [watchingVideo, setWatchingVideo] = useState(false);

  
  return (
    <div className="flex flex-col min-h-screen gradient overflow-hidden">
      <Helmet>
        {/* Title */}
        <title>Said Bara</title>

        {/* Description */}
        <meta
          name="description"
          content={
            "I'm Said Bara, a MERN stack developer with more than a year and half of experience under my belt. I have a solid foundation in MERN stack technologies and am always eager to learn and grow my skills. I'm a flexible and fast learner, always up for a challenge and eager to take on new projects."
          }
        />

        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content="Said Bara" />
        <meta
          property="og:description"
          content="I'm Said Bara, a MERN stack developer with more than a year and half of experience under my belt. I have a solid foundation in MERN stack technologies and am always eager to learn and grow my skills. I'm a flexible and fast learner, always up for a challenge and eager to take on new projects."
        />
        <meta property="og:url" content="saidbara.pages.dev" />
        <meta property="og:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:title" content="Said Bara" />
        <meta
          name="twitter:description"
          content="I'm Said Bara, a MERN stack developer with more than a year and half of experience under my belt. I have a solid foundation in MERN stack technologies and am always eager to learn and grow my skills. I'm a flexible and fast learner, always up for a challenge and eager to take on new projects."
        />
        <meta name="twitter:url" content="saidbara.pages.dev" />
        <meta name="twitter:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Additional meta tags */}
        <meta
          name="keywords"
          content="MERN stack, Web Development, Portfolio, React, Freelance, Web Design, SEO, Best Web developer, Frontend, Backend, JavaScript, Node.js, Express, MongoDB, Redux, Responsive Design, UI/UX, Full-Stack Developer"
        />
        <meta name="author" content="Said Bara" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Helmet>

      <NavBar setShowNavPage={setShowNavPage} />
      <NavPage showNavPage={showNavPage} setShowNavPage={setShowNavPage} />

      <Hero setWatchingVideo={setWatchingVideo} />

      {watchingVideo && <WatchVideo setWatchingVideo={setWatchingVideo} />}

      <AboutMe />

      <Projects setShowProject={setShowProject} />
      <ProjectDetailsPage
        showProject={showProject}
        setShowProject={setShowProject}
        showCommentForm={showCommentForm}
        newCommentText={newCommentText}
        setNewCommentText={setNewCommentText}
      />

      <Modal
        modalTitle="Drop a comment"
        isOpen={showCommentModel}
        onClose={closeModal}
      >
        <CommentForm
          newCommentText={newCommentText}
          projectID={showProject?.name}
          setCommentSuccess={setCommentSuccess}
          closeModal={closeModal}
        />
      </Modal>

      <Notification
        isOpen={commentSuccess}
        onClose={() => {
          setCommentSuccess(false);
        }}
      >
        <p className="text-sm sm:text-md md:text-lg">{t("commentSuccess")}</p>
      </Notification>

      <Services />
      <BeforeAfterPoints />
      <Featured />
      <Skills />
      <Testimonials />

      <Contact />

      <Modal
        modalTitle={t("quiz.quiz-title")}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Quiz />
      </Modal>

      <Notification isOpen={isNotificationOpen} onClose={closeNotification}>
        <p className="text-sm sm:text-md md:text-lg">
          {t("quizOffer")}{" "}
          <button className="underline text-pink-600" onClick={openModal}>
            {t("buttons.openQuiz")}{" "}
          </button>
        </p>
      </Notification>

      <Footer />
    </div>
  );
};

export default LandingPage;

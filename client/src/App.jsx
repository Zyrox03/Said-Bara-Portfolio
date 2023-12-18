import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./components/Pages/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { RequestQuote } from "./components/Pages/RequestQuote";
import { PageNotFound } from "./components/Pages/PageNotFound";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import { Admin } from "./components/Pages/Admin";
import { CommentManagement } from "./components/Pages/CommentManagement";
import {  useState } from "react";
import { Login } from "./components/Pages/Login";

const initialLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
  },
  lng: initialLanguage, // Set a default language
  interpolation: {
    escapeValue: false,
  },
});

AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
});




const App = () => {
const [isAdmin, setIsAdmin] = useState(false);


  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/request-a-quote" exact element={<RequestQuote />} />
        <Route path="/login" exact element={<Login setIsAdmin={setIsAdmin} />} />
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <Admin />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/admin/comments"
          element={
            isAdmin ? (
              <CommentManagement />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/*" exact element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

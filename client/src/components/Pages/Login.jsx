import PropTypes from "prop-types";
import { NavBarMin } from "../NavBarMin";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export const Login = ({ setIsAdmin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    try {
      setLoginError("");
      setLoginLoading(true);

      e.preventDefault();
      await axios.post(`${import.meta.env.VITE_BASE_API}/api/login`, {
        username,
        password,
      });
      setIsAdmin(true);
      navigate("/admin");
    } catch (error) {
      setLoginError(error?.response.data?.error);
      console.log(error);
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div
      className="text-center flex flex-col justify-start items-center gap-8 h-screen w-full gradient overflow-hidden relative "
      style={{ zIndex: 100 }}
    >

<Helmet>
  {/* Title */}
  <title>Login | Said Bara</title>

  {/* Description */}
  <meta
    name="description"
    content="Login page for Said Bara's portfolio website. Access your account to manage projects, services, and respond to user inquiries."
  />

  {/* Open Graph meta tags for social sharing */}
  <meta property="og:title" content="Login | Said Bara" />
  <meta
    property="og:description"
    content="Login page for Said Bara's portfolio website. Access your account to manage projects, services, and respond to user inquiries."
  />
  <meta property="og:url" content="saidbara.pages.dev/login" />
  <meta property="og:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
  <meta property="og:type" content="website" />

  {/* Twitter Card meta tags for Twitter sharing */}
  <meta name="twitter:title" content="Login | Said Bara" />
  <meta
    name="twitter:description"
    content="Login page for Said Bara's portfolio website. Access your account to manage projects, services, and respond to user inquiries."
  />
  <meta name="twitter:url" content="saidbara.pages.dev/login" />
  <meta name="twitter:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Additional meta tags */}
  <meta
    name="keywords"
    content="Login, Portfolio, Account Login, User Authentication, MERN stack, Web Development, React, Node.js, Express"
  />
  <meta name="author" content="Said Bara" />
  <meta name="robots" content="noindex, nofollow" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Helmet>


      <div className="hidden sm:flex blur bg-blur blur-animate"></div>
      <div className="blur bg-blur-2 blur-animate"></div>

      <NavBarMin />

      <div className="md:w-[500px]  bg-slate-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl "  
       data-aos="zoom-out-up"
                  data-aos-duration="750">
          <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="text-md text-red-500 mb-4">{loginError} </div>

          {loginLoading ? (
            <button type="button" className="main_button w-full">
              Loading...
            </button>
          ) : (
            <button
              disabled={loginLoading}
              type="submit"
              className="main_button w-full"
            >
              Login
            </button>
          )}
        </form>
</div>

      </div>
    </div>
  );
};

Login.propTypes = {
  setIsAdmin: PropTypes.func.isRequired,
};

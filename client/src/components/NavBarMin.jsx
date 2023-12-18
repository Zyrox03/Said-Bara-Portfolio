import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../Widgets/LanguageSwitcher";

export const NavBarMin = () => {
  return (
    <nav className="w-full px-2 sm:px-6 py-6 flex justify-between items-center  ">
      <Link to="/">
        <h1 className="FadeInTextAnimation text-2xl  md:text-4xl text-white font-bold cursor-pointer ">
          <span>Said</span> <span>Bara</span>
        </h1>
      </Link>

      <div className="flex justify-end flex-wrap-reverse gap-2 sm:gap-4">
        <Link to="/">
          <button className="secondary_button ">
            <i className="fa-solid fa-home"></i>
          </button>
        </Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

import { ContactForm } from "../../Widgets/ContactForm";
import PropTypes from "prop-types";
import { Title } from "../layouts/Title";
import { useTranslation } from "react-i18next";

export const Contact = ({ setEmailSuccess }) => {
  const { t } = useTranslation();

  return (
    <section
      id="Contact"
      className="flex flex-col justify-center px-4 py-12 items-center gap-6 overflow-hidden"
      
    >
      <Title
        section={t("contact.sectionTitle")}
        title={t("contact.mainTitle")}
        sub_title={t("contact.subTitle")}
      />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 sm:p-4 w-full">
        <div className="hidden lg:flex flex-1">
          <img
            className="rounded-2xl  "
            src="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp"
            alt=""
          />
        </div>
        <div
          className="flex-1 w-full"
         
        >
          <ContactForm setEmailSuccess={setEmailSuccess} />
        </div>
      </div>
    </section>
  );
};
// Define PropTypes for the component
Contact.propTypes = {
  setEmailSuccess: PropTypes.func,
};

import { useState } from "react";
import { Title } from "../layouts/Title";
import { useTranslation } from "react-i18next"; // Import the translation hook
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import { Footer } from "../Footer";
import { NavBarMin } from "../NavBarMin";
import { Helmet } from "react-helmet";

export const RequestQuote = () => {
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteError, setQuoteError] = useState("");
  const [quoteLoading, setQuoteLoading] = useState(false);

  const { t } = useTranslation(); // Use the translation hook

  const [step, setStep] = useState(1);

  const validationSchemaStep1 = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.number(),
  });

  const validationSchemaStep2 = Yup.object({
    company: Yup.string().notRequired(),
    website: Yup.string().url("Invalid URL").notRequired(),
    projectType: Yup.string().required("Project type is required"),
    projectGoals: Yup.string().required("Project goals are required"),
  });

  const validationSchemaStep3 = Yup.object({
    budget: Yup.string().required("Budget is required"),
    message: Yup.string().notRequired(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      projectType: "",
      projectGoals: "",
      budget: "",
      message: "",
    },
    validationSchema:
      step === 1
        ? validationSchemaStep1
        : step === 2
        ? validationSchemaStep2
        : validationSchemaStep3,

    onSubmit: async (values) => {
      try {
        setQuoteLoading(true);
        setQuoteError("");
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_API}/api/request-a-quote`,
          values
        );
        const { message } = response.data;
        console.log(message);
        setQuoteSuccess(true);
      } catch (error) {
        console.log(error);
        setQuoteError(
          error?.response?.data?.error || "Something went wrong :("
        );
      } finally {
        setQuoteLoading(false);
      }
    },
  });
  const [formContainerStyles, setFormContainerStyles] =
    useState("translate-x-[0%]");

  const nextStep = () => {
    formik.setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      website: true,
      projectType: true,
      projectGoals: true,
      budget: true,
      message: true,
    });

    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setStep(step + 1);
        if (step === 1) {
          setFormContainerStyles("-translate-x-[100%] duration-500");
        } else if (step === 2) {
          setFormContainerStyles("-translate-x-[200%] duration-500");
        } else if (step === 3) {
          setFormContainerStyles("-translate-x-[100%] duration-500");
        }
      }
    });
  };

  const previousStep = () => {
    setStep(step - 1);
    if (step === 1) {
      setFormContainerStyles("-translate-x-[0%] duration-500");
    } else if (step === 2) {
      setFormContainerStyles("-translate-x-[0%] duration-500");
    } else if (step === 3) {
      setFormContainerStyles("-translate-x-[100%] duration-500");
    }
  };

  return (
    <div
      className="flex flex-col justify-between min-h-screen gradient
    relative overflow-hidden"
      style={{ zIndex: 100 }}
    >

<Helmet>
  {/* Title */}
  <title>
  {`${t('buttons.request-a-quote')} | Said Bara`}
  </title>

  {/* Description */}
  <meta
    name="description"
    content="Request a quote for your project or collaboration with Said Bara, a skilled MERN stack developer. Let's discuss your requirements and bring your ideas to life."
  />

  {/* Open Graph meta tags for social sharing */}
  <meta property="og:title" content={`${t('buttons.request-a-quote')} | Said Bara`}  />
  <meta
    property="og:description"
    content="Request a quote for your project or collaboration with Said Bara, a skilled MERN stack developer. Let's discuss your requirements and bring your ideas to life."
  />
  <meta property="og:url" content="saidbara.pages.dev/request-a-quote" />
  <meta property="og:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
  <meta property="og:type" content="website" />

  {/* Twitter Card meta tags for Twitter sharing */}
  <meta name="twitter:title" content={`${t('buttons.request-a-quote')} | Said Bara`}  />
  <meta
    name="twitter:description"
    content="Request a quote for your project or collaboration with Said Bara, a skilled MERN stack developer. Let's discuss your requirements and bring your ideas to life."
  />
  <meta
    name="twitter:url"
    content="saidbara.pages.dev/request-a-quote"
  />
  <meta name="twitter:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Additional meta tags */}
  <meta
    name="keywords"
    content="Request a Quote, Collaboration, Project Quote, Said Bara, MERN stack, Web Development, React, Node.js, Express, Freelance Developer"
  />
  <meta name="author" content="Said Bara" />
  <meta name="robots" content="index, follow" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Helmet>


      <div className="hidden sm:flex blur bg-blur blur-animate"></div>
      <div className="blur bg-blur-2 blur-animate"></div>

      <NavBarMin />
     

      <div className="flex flex-col lg:flex-row w-full h-full gap-6 py-6 ">
        <div className="flex flex-col items-center justify-around flex-1 px-3 gap-12">
          <Title
            section={t("request-a-quote.sectionTitle")}
            title={t("request-a-quote.mainTitle")}
            sub_title={t("request-a-quote.subTitle")}
          />

          {/* TIMELINE */}

          <ol className="hidden border-l-2 md:border-l-0 md:border-t-2 md:flex border-slate-100 ">
            {t("request-a-quote.timeline", { returnObjects: true }).map(
              ({ title, description, icone }, index) => (
                <li
                  key={index}
                  className="flex-1"
                  data-aos="zoom-out-up"
                  data-aos-duration="750"
                >
                  <div className="justify-center md:flex relative mt-4 ">
                    <div className=" md:ml-0 absolute bottom-[102%] md:translate-x-1/2 flex h-[35px] w-[35px] items-center justify-center rounded-full bg-opacity-50 backdrop-blur-md shadow-md text-white">
                      <i className={icone}></i>
                    </div>

                    <div className=" ml-6 block max-w-md  py-3 text-center text-white  ">
                      <h4 className="-mt-2 text-lg font-semibold">{title}</h4>
                      <p className="mb-6  text-md ">{description}</p>
                    </div>
                  </div>
                </li>
              )
            )}
          </ol>
        </div>
        <div className="flex items-center justify-center flex-1 p-4 ">
          {quoteSuccess ? (
            <div className="p-6 bg-slate-200 rounded-lg shadow-lg">
              <p className="text-md lg:text-lg text-black ">
                {t("contactSuccess")}
              </p>
            </div>
          ) : (
            <div
              className="bg-slate-200  min-h-[500px] relative  w-full rounded-lg shadow-lg overflow-hidden"
              data-aos="zoom-out-up"
              data-aos-duration="750"
            >
              <div
                className={`absolute h-full w-full  transition-transform ${formContainerStyles} `}
              >
                <form
                  onSubmit={formik.handleSubmit}
                  className={` h-full w-full transition-transform `}
                >
                  <div
                    className={`transform w-full  h-full absolute left-[0%] px-4 sm:px-8 py-8 transition-transform flex flex-col gap-2`}
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.name.label")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        disabled={quoteLoading}
                        placeholder={t(
                          "request-a-quote.quote-form.name.placeholder"
                        )}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="mt-1 p-2 w-full border rounded-md outline-blue-500"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.name}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.email.label")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        disabled={quoteLoading}
                        placeholder={t(
                          "request-a-quote.quote-form.email.placeholder"
                        )}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="mt-1 p-2 w-full border rounded-md outline-blue-500"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.phone.label")}
                        <span className="text-gray-400 text-xs">
                          {" "}
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        disabled={quoteLoading}
                        placeholder={t(
                          "request-a-quote.quote-form.phone.placeholder"
                        )}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className="mt-1 p-2 w-full border rounded-md outline-blue-500"
                      />

                      {formik.touched.phone && formik.errors.phone && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.phone}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end absolute bottom-5 left-1/2 -translate-x-1/2 ">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md outline-blue-500"
                      >
                        {t("buttons.next")}
                      </button>
                    </div>
                  </div>
                  <div
                    className={`transform w-full h-full absolute left-[100%] px-4 sm:px-8 py-8  transition-transform flex flex-col gap-2 `}
                  >
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.projectType.label")}
                      </label>

                      <Select
                        isDisabled={quoteLoading}
                        placeholder={t(
                          "request-a-quote.quote-form.projectType.placeholder"
                        )}
                        options={t(
                          "request-a-quote.quote-form.projectType.projectTypeOptions",
                          { returnObjects: true }
                        )}
                        id="projectType"
                        name="projectType"
                        onChange={(selectedOption) =>
                          formik.setFieldValue(
                            "projectType",
                            selectedOption.value
                          )
                        }
                        onBlur={formik.handleBlur}
                        value={formik.values.projectType.value}
                      />

                      {formik.touched.projectType &&
                        formik.errors.projectType && (
                          <div className="text-red-500 text-sm mt-1">
                            {formik.errors.projectType}
                          </div>
                        )}
                    </div>

                    <div>
                      <label
                        htmlFor="projectGoals"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.projectGoals.label")}
                      </label>
                      <input
                        type="text"
                        id="projectGoals"
                        name="projectGoals"
                        disabled={quoteLoading}
                        placeholder={t(
                          "request-a-quote.quote-form.projectGoals.placeholder"
                        )}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.projectGoals}
                        className="mt-1 p-2 w-full border rounded-md outline-blue-500"
                      />
                      {formik.touched.projectGoals &&
                        formik.errors.projectGoals && (
                          <div className="text-red-500 text-sm mt-1">
                            {formik.errors.projectGoals}
                          </div>
                        )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.company.label")}
                        <span className="text-gray-400 text-xs">
                          {" "}
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        disabled={quoteLoading}
                        placeholder={t(
                          "request-a-quote.quote-form.company.placeholder"
                        )}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company}
                        className="mt-1 p-2 w-full border rounded-md outline-blue-500"
                      />
                      {formik.touched.company && formik.errors.company && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.company}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.website.label")}
                        <span className="text-gray-400 text-xs">
                          {" "}
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        disabled={quoteLoading}
                        placeholder={t(
                          "request-a-quote.quote-form.website.placeholder"
                        )}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.website}
                        className="mt-1 p-2 w-full border rounded-md outline-blue-500"
                      />
                      {formik.touched.website && formik.errors.website && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.website}
                        </div>
                      )}
                    </div>

                    <div className=" w-full px-6 flex justify-between absolute bottom-5 left-1/2 -translate-x-1/2 ">
                      <button
                        type="button"
                        onClick={previousStep}
                        className="px-4 py-2 text-gray-500 rounded-md "
                      >
                        {t("buttons.previous")}
                      </button>

                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                      >
                        {t("buttons.next")}
                      </button>
                    </div>
                  </div>

                  <div
                    className={`transform w-full h-full absolute left-[200%] px-4 sm:px-8 py-8  transition-transform flex flex-col gap-2  `}
                  >
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.budget.label")}
                      </label>

                      <Select
                        isDisabled={quoteLoading}
                        placeholder="Enter your budget"
                        options={t(
                          "request-a-quote.quote-form.budget.budgetOptions",
                          { returnObjects: true }
                        )}
                        id="budget"
                        name="budget"
                        onChange={(selectedOption) =>
                          formik.setFieldValue("budget", selectedOption.value)
                        }
                        onBlur={formik.handleBlur}
                        value={formik.values.budget.value}
                      />

                      {formik.touched.budget && formik.errors.budget && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.budget}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {t("request-a-quote.quote-form.message.label")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder={t(
                          "request-a-quote.quote-form.message.placeholder"
                        )}
                        disabled={quoteLoading}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className="mt-1 p-2 w-full border rounded-md outline-blue-500 "
                        style={{ height: "250px" }}
                      />
                      {formik.touched.message && formik.errors.message && (
                        <div className="text-red-500 text-sm mt-1">
                          {formik.errors.message}
                        </div>
                      )}
                    </div>

                    {/* Add more fields for the second step as needed */}

                    <div className="w-full px-6  flex justify-between absolute bottom-5 left-1/2 -translate-x-1/2">
                      <button
                        type="button"
                        onClick={previousStep}
                        className="px-4 py-2 text-gray-500 rounded-md"
                      >
                        {t("buttons.previous")}
                      </button>
                      {quoteLoading ? (
                        <button
                          type="button"
                          className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                          Sending Message...
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                          {t("buttons.submit")}
                        </button>
                      )}
                    </div>
                    <div className="text-red-500 mt-3">{quoteError}</div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

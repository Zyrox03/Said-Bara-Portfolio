import { useState } from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Select from "react-select";

export const ContactForm = () => {
  const { t } = useTranslation();

  const [contactLoading, setContactLoading] = useState(false);
  const [contactError, setContactError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  const servicesOptions = [
    { label: t("contact.formInputs.service.label"), value: "", disabled: true },
    { label: "Web Development", value: "web-development" },
    // { label: 'Design', value: 'design' },
    { label: "Consultation", value: "consultation" },
    { label: t("buttons.other"), value: "other" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      services: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.message) {
        errors.message = "Message is required";
      }

      if (!values.services) {
        errors.services = "Please select a service";
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        setContactError("");
        setContactLoading(true);

        await emailjs.send(
          "service_6qr7yhb",
          "template_kd5xm6l",
          values,
          "9kpXtsgKCEiwhKJwb"
        );

        setEmailSuccess(true);
      resetForm();

      } catch (error) {
        console.error(error);
        setContactError(
          "Something must've went wrong, please contact me on social media "
        );
        setTimeout(() => {
          setContactError("");
        }, 5000);
      } finally {
        setContactLoading(false);
      }

    },
  });

  return (
    <div className="w-full p-4 sm:p-8 ">
      {emailSuccess ? (
        <div className="p-6 bg-slate-200 rounded-lg shadow-lg">
          <p className="text-md lg:text-lg text-black ">
            {t("contactSuccess")}
          </p>
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              {t("contact.formInputs.name.label")}
            </label>
            <input
              disabled={contactLoading}
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md bg-white disabled:bg-gray-100"
              placeholder={t("contact.formInputs.name.placeholder")}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              {t("contact.formInputs.email.label")}
            </label>
            <input
              disabled={contactLoading}
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md bg-white disabled:bg-gray-100"
              placeholder={t("contact.formInputs.email.placeholder")}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="services"
              className="block text-sm font-medium text-white"
            >
              {t("contact.formInputs.service.label")}
            </label>

            <Select
              isDisabled={contactLoading}
              placeholder={t("contact.formInputs.service.label")}
              options={servicesOptions}
              isSearchable={false}
              select
              id="services"
              name="services"
              onChange={(selectedOption) =>
                formik.setFieldValue("services", selectedOption.value)
              }
              onBlur={formik.handleBlur}
              value={formik.values.services.values}
            />
            {formik.touched.services && formik.errors.services && (
              <div className="text-red-500 text-sm">
                {formik.errors.services}
              </div>
            )}
          </div>

          {/* Message Textarea */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              {t("contact.formInputs.message.label")}
            </label>
            <textarea
              disabled={contactLoading}
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md bg-white disabled:bg-gray-100"
              placeholder={t("contact.formInputs.message.placeholder")}
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm">
                {formik.errors.message}
              </div>
            )}
          </div>

          {contactError && (
            <div className="mb-4">
              <p className="text-red-500 text-md"> {contactError} </p>
            </div>
          )}

          {/* Submit Button */}
          {contactLoading ? (
            <button type="button" className="secondary_button">
              {t("buttons.sending")}
            </button>
          ) : (
            <button type="submit" className="secondary_button">
              {t("buttons.submit")}
            </button>
          )}
        </form>
      )}
    </div>
  );
};

ContactForm.propTypes = {
  setEmailSuccess: PropTypes.func,
};

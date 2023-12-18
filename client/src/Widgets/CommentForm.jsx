import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const CommentForm = ({
  projectID,
  newCommentText,
  setCommentSuccess,
  closeModal,
}) => {
  const validationSchema = Yup.object({
    displayName: Yup.string().required("Name is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const { t } = useTranslation();

  const [commentError, setCommentError] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setCommentError("");
      setCommentLoading(true);
      const { displayName, photoURL, comment } = values;

      const formData = new FormData();
      formData.append("displayName", displayName);
      formData.append("photoURL", photoURL);
      formData.append("comment", comment);
      formData.append("projectID", projectID);

      // Send formData using axios  HTTP library

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API}/api/comments`,
        formData
      );

      const { message } = response.data;
      console.log(message);

      setCommentSuccess(true);
      closeModal();
      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.error("Error adding comment:", error);

      if (error.response) {
        // The request was made, and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(
          "Server responded with non-2xx status",
          error.response.status
        );
        console.error("Server response data:", error.response.data);

        // Set an appropriate error message based on the server response
        setCommentError(`Server error: ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
        setCommentError("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
        setCommentError(`Error setting up the request: ${error.message}`);
      }
    } finally {
      setCommentLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      displayName: "",
      photoURL: "",
      comment: newCommentText || "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const onDrop = (acceptedFiles) => {
    formik.setFieldValue("photoURL", acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    disabled: commentLoading,
  });

  useEffect(() => {
    formik.setFieldValue("photoURL", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Update the initial value of the 'comment' field when 'newCommentText' changes
    formik.setValues({
      ...formik.values,
      comment: newCommentText,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCommentText]);

  const submitForm = async (e) => {
    e.preventDefault();
    formik.submitForm();
  };
  return (
    <form
      className="w-full mx-auto mt-8 p-0 sm:p-4 lg:p-8 rounded"
      encType="multipart/form-data"
      onSubmit={(e) => submitForm(e)}
    >
      {/* Your form fields */}
      <div className="mb-4">
        <label
          htmlFor="displayName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {t("comment.labels.name.label")}
        </label>
        <input
          id="displayName"
          name="displayName"
          disabled={commentLoading}
          placeholder={t("comment.labels.name.placeholder")}
          required
          value={formik.values.displayName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
            formik.touched.displayName && formik.errors.displayName
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.displayName && formik.errors.displayName && (
          <div className="text-red-500">{formik.errors.displayName}</div>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="photoURL"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Profile Picture:
        </label>
        <div
          {...getRootProps()}
          className={`dropzone  ${
            commentLoading ? "bg-gray-100/50" : "bg-white"
          }`}
        >
          <input {...getInputProps()} />
          <p>{t("comment.labels.dropzone.label")}</p>
          {formik.values.photoURL && acceptedFiles.length > 0 && (
            <div className="dropzone-preview">
              <img src={URL.createObjectURL(acceptedFiles[0])} alt="Preview" />
            </div>
          )}
        </div>
        {formik.touched.photoURL && formik.errors.photoURL && (
          <div className="text-red-500">{formik.errors.photoURL}</div>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {t("comment.labels.comment.label")}
        </label>
        <textarea
          id="comment"
          name="comment"
          disabled={commentLoading}
          placeholder={t("comment.labels.comment.placeholder")}
          required
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
            formik.touched.comment && formik.errors.comment
              ? "border-red-500"
              : ""
          }`}
        />
        {formik.touched.comment && formik.errors.comment && (
          <div className="text-red-500">{formik.errors.comment}</div>
        )}
      </div>

      <div className="text-red-500 mb-4">{commentError}</div>

      {/* Your other form fields */}
      {commentLoading ? (
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
          >
            {t("comment.loadingComment")}
          </button>
        </div>
      ) : (
        <button
          type="submit"
          // onClick={formik.submitForm}
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
        >
          {t("comment.submitComment")}
        </button>
      )}
    </form>
  );
};

CommentForm.propTypes = {
  projectID: PropTypes.string,
  newCommentText: PropTypes.string,
  setCommentSuccess: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

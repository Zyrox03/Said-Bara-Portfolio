import { useEffect, useState } from "react";
import { NavBarMin } from "../NavBarMin";
import axios from "axios";
import { Modal } from "../layouts/Modal";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
export const CommentManagement = () => {
  const [allComments, setAllComments] = useState([]);
  const [editComment, setEditComment] = useState();

  useEffect(() => {
    const getProjectComments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_API}/api/comments`
        );
        const { projectsComments } = response.data;
        console.log(projectsComments);
        setAllComments(projectsComments);
      } catch (error) {
        console.log(error);
      }
    };
    getProjectComments();
  }, []);

  //   FORMIK UPDATTING COMMENT
  const formik = useFormik({
    initialValues: {
      commentID: "",
      response: "",
      isApproved: true,
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const response = await axios.put(
          `${import.meta.env.VITE_BASE_API}/api/comment/${values.commentID}`,
          values
        );
        const { projectsComments } = response.data;
        setAllComments(projectsComments);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const submitForm = async (e, commentID) => {
    e.preventDefault();
    console.log(commentID);
    formik.setFieldValue("commentID", commentID);
    await formik.submitForm();
    closeModal();
  };
  const deleteComment = async (commentID) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API}/api/comment/${commentID}`
      );
      const { projectsComments } = response.data;
      setAllComments(projectsComments);
      closeModal();
      closeConfirmationModal()
    } catch (error) {
      console.log(error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (comment) => {
    formik.setFieldValue("response", comment.response);
    setEditComment(comment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    formik.resetForm();
  };

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);

    // Define options for formatting
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false, // Use 24-hour format
    };

    // Format the date
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    return formattedDate;
  };

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState('');
  const openConfirmationModal = (commentID) => {
    setOpenConfirmation(true);
    setCommentToDelete(commentID)
  };
  const closeConfirmationModal = () => {
    setOpenConfirmation(false);
    setCommentToDelete('')
  };
  return (
    <div
      className="text-center flex flex-col justify-start items-center gap-8 min-h-screen w-full overflow-x-hidden gradient  relative"
      style={{ zIndex: 100 }}
    >
      <div className="hidden sm:flex blur bg-blur blur-animate"></div>
      <div className="blur bg-blur-2 blur-animate"></div>

      <NavBarMin />

      <div className="w-[90%]">
        {/* <!--  Comment Head Card --> */}
        <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 bg-slate-100 md:px-4 py-4 rounded-lg shadow-md mb-4 text-start">
          <div className=" col-span-1 flex items-center justify-center">
            Picture
          </div>
          <div className="col-span-1 flex items-center justify-start">Name</div>
          <div className="hidden col-span-4  lg:flex items-center  justify-start">
            Comment
          </div>
          <div className="hidden col-span-1  lg:flex items-center  justify-start">
            Project ID
          </div>
          <div className="col-span-1 flex items-center justify-start ">
            Approved
          </div>
          <div className="hidden col-span-1 lg:flex items-center justify-start">
            Response
          </div>
          <div className="hidden col-span-1 lg:flex items-center  justify-start">
            Date
          </div>

          <div className="hidden col-span-1 lg:flex items-center justify-center ">
            Delete
          </div>

          <div className="col-span-1 flex items-center justify-center">
            Edit
          </div>
        </div>

        {allComments &&
          allComments.map((comment, index) => {
            // Parse the date string into a Date object

            return (
              /* <!-- Comment Card --> */
              <div
                key={index}
                className="grid grid-cols-4 lg:grid-cols-12 gap-4 bg-slate-100 md:px-4 py-4 rounded-lg shadow-md mb-4 text-start"
              >

<Helmet>
  {/* Title */}
  <title>Comment Management | Said Bara</title>

  {/* Description */}
  <meta
    name="description"
    content="Manage comments on Said Bara's portfolio website. Review and moderate user comments on projects and services."
  />

  {/* Open Graph meta tags for social sharing */}
  <meta property="og:title" content="Comment Management | Said Bara" />
  <meta
    property="og:description"
    content="Manage comments on Said Bara's portfolio website. Review and moderate user comments on projects and services."
  />
  <meta property="og:url" content="saidbara.pages.dev/admin/comments" />
  <meta property="og:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
  <meta property="og:type" content="website" />

  {/* Twitter Card meta tags for Twitter sharing */}
  <meta name="twitter:title" content="Comment Management | Said Bara" />
  <meta
    name="twitter:description"
    content="Manage comments on Said Bara's portfolio website. Review and moderate user comments on projects and services."
  />
  <meta
    name="twitter:url"
    content="saidbara.pages.dev/admin/comments"
  />
  <meta name="twitter:image" content="https://res.cloudinary.com/duh30yscb/image/upload/v1702888053/SaidBaraPortfolio/SaidBaraLogo_whvluk.webp" />
  <meta name="twitter:card" content="summary_large_image" />

  {/* Additional meta tags */}
  <meta
    name="keywords"
    content="Comment Management, Portfolio, Moderation, User Comments, MERN stack, Web Development, React, Node.js, Express"
  />
  <meta name="author" content="Said Bara" />
  <meta name="robots" content="noindex, nofollow" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Helmet>

                <div className="col-span-1 flex items-center justify-center">
                  <img
                    src={
                      comment.photoURL ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    className="object-cover w-10 md:w-20 h-10 md:h-20 rounded-full"
                    alt=""
                  />
                </div>
                <div className="col-span-1 flex items-center justify-start">
                  {comment.displayName}
                </div>
                <div className="hidden col-span-4  lg:flex items-center  justify-start">
                  {comment.comment}
                </div>
                <div className="hidden col-span-1  lg:flex items-center  justify-start">
                  {comment.projectID}
                </div>
                <div className="col-span-1 flex items-center justify-start ">
                  {comment.isApproved ? (
                    <i className="fa-solid fa-square-check text-green-500 text-3xl ml-4"></i>
                  ) : (
                    <i className="fas fa-square-xmark text-red-500 text-3xl ml-4 "></i>
                  )}
                </div>
                <div className="hidden col-span-1 lg:flex items-center justify-start">
                  {comment.response ? (
                    <i className="fa-solid fa-square-check text-green-500 text-3xl ml-4"></i>
                  ) : (
                    <i className="fas fa-square-xmark text-red-500 text-3xl ml-4 "></i>
                  )}
                </div>
                <div className="hidden col-span-1 lg:flex items-center  justify-start">
                  {formatDate(comment.createdAt)}
                </div>

                <div className="hidden col-span-1 lg:flex items-center justify-center ">
                  <div
                    className="clickable_card px-4 py-2"
                    onClick={() => openConfirmationModal(comment?._id)}
                  >
                    <i className="fas fa-trash-alt text-red-500 cursor-pointer"></i>
                  </div>
                </div>

                <div className="col-span-1 flex items-center justify-center">
                  <div
                    className="clickable_card px-4 py-2"
                    onClick={() => openModal(comment)}
                  >
                    <i className="fa-solid fa-pen cursor-pointer"></i>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <Modal
        modalTitle="Edit Comment"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <div className="flex flex-col gap-4">
          {/* <!-- User Info Section --> */}
          <div className="flex items-center mb-4 gap-4 justify-between">
            <div className="flex items-center gap-2">
              <img
                src={
                  editComment?.photoURL ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                alt="User Photo"
                className="w-20 h-20 rounded-full mr-4 object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {editComment?.displayName}
                </h2>
                <p className="text-gray-500 text-sm">
                  {editComment?.projectID}
                </p>
              </div>
            </div>

            <div>
              {/* <!-- Timestamp Section --> */}
              <p className="text-gray-500 text-sm mb-2">
                Created at:{" "}
                {editComment?.createdAt && formatDate(editComment.createdAt)}{" "}
              </p>
              {/* <!-- Approval Status Section --> */}
              <p className="text-md">
                Approval Status:{" "}
                <span className="">
                  {editComment?.isApproved ? "Approved" : "Not Approved"}
                </span>
              </p>
            </div>
          </div>
          {/* <!-- Comment Text Section --> */}
          <div className="flex flex-col text-start">
            <h3>Comment :</h3>
            <p className="text-gray-800 mb-4"> {editComment?.comment}</p>
          </div>
        </div>
        <form onSubmit={(e) => submitForm(e, editComment?._id)}>
          <div>
            <textarea
              placeholder="Respond to this comment"
              name="response"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.response}
              id="response"
              className="w-full max-h-[200px] p-4 outline-blue-600"
            ></textarea>
          </div>

          <div className="flex gap-4 items-center justify-between">
            <button
              className="secondary_button"
              onClick={() => deleteComment(editComment?._id)}
            >
              <i className="fas fa-trash-alt text-red-500 cursor-pointer"></i>
            </button>
            <button type="submit" className="main_button">
              Approve & Update
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        modalTitle="Delete Comment ?"
        isOpen={openConfirmation}
        onClose={closeConfirmationModal}
      >

        <div className="flex items-center justify-center gap-6">
            <button className="secondary_button" onClick={()=>deleteComment(commentToDelete)}>Delete</button>
            <button className="secondary_button" onClick={()=>setOpenConfirmation(false)}>Cancel</button>

        </div>

      </Modal>
    </div>
  );
};

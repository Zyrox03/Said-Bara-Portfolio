import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
export const ProjectComments = ({
  projectID,
  showCommentForm,
  newCommentText,
  setNewCommentText,
}) => {
  const [comments, setComments] = useState([]);
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (projectID) {
      const getProjectComments = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_API}/api/comments/${projectID}`
          );
          const { projectComments } = response.data;
          setComments(projectComments);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };

      getProjectComments();
    }
  }, [projectID]);

  return (
    <div className="w-full">
      <div className="comments-space  w-full">
        <div className="oneComment mb-20 text-black ">
          <div>
            {isLoading ? (
              <div className="text-2xl  text-center text-slate-300">
                {t("buttons.loading")}
              </div>
            ) : comments && comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className=" mb-8 ">
                  <div className="comment bg-slate-200 text flex w-full h-20 md:h-32   rounded-3xl mb-4 relative py-2 px-4">
                    <div className=" rounded-full h-full m-auto p-1 ">
                      <div className="avatar indicator  ">
                        <span className="text-xl absolute bottom-[90%] bg-blue-300 rounded-full py-1 px-4 ">
                          {comment.displayName}
                        </span>
                        <div className="w-[60px] lg:w-[100px] h-[60px] lg:h-[100px] mr-4">
                          <img
                            src={
                              comment.photoURL ||
                              "https://www.pngkey.com/png/full/202-2024691_my-profile-comments-my-profile-icon-png.png"
                            }
                            alt="Gravatar"
                            className=" object-cover rounded-lg  w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center w-full py-5 ">
                      <p className="text-md md:text-xl lg:text-2xl  text-start h-full flex items-center w-full  ">
                        {comment.comment}{" "}
                      </p>
                    </div>
                  </div>
                  {comment.response && (
                    <div className="comment bg-blue-200 text flex w-full max-h-80 rounded-3xl  relative py-2 px-4 ml-[40px]">
                      <div className="w-40 rounded-full h-full m-auto p-1 ">
                        <div className="avatar indicator  ">
                        <span className="text-xl absolute bottom-[90%] bg-blue-300 rounded-full py-1 px-4 ">
                            Said Bara
                          </span>
                          <div className="w-[60px] lg:w-[100px] h-[60px] lg:h-[100px] mr-4">
                            <img
                              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                              alt="Gravatar"
                              className="object-cover  "
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" flex items-center w-full p-5 ">
                      <p className="text-md md:text-xl lg:text-2xl  text-start h-full flex items-center w-full  ">
                          {comment.response}{" "}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-2xl  text-center text-slate-300">
                {t("comment.noCommentsYet")}{" "}
              </div>
            )}
          </div>
        
        </div>
      </div>

      {/* NEW COMMENT */}

      <div className="new-comment">
        <div className="bg-slate-200 text-black w-full h-20 md:h-32 flex  items-center rounded-3xl mb-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              showCommentForm();
            }}
            className="w-full rounded-full" 
          >
            <label className="input-group w-full flex gap-3 p-5">
              <input
                type="text"
                name="newCommentText"
                placeholder={t("comment.commentPlaceholder")}
                className="input text-md lg:text-lg bg-transparent w-full outline-none placeholder:text-gray-700"
                required=""
                value={newCommentText}
                onChange={(e) => {
                  setNewCommentText(e.target.value);
                }}
              />
              <button type="submit" className="main_button p-3 ">
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

ProjectComments.propTypes = {
  projectID: PropTypes.string,
  showCommentForm: PropTypes.func.isRequired,
  newCommentText: PropTypes.string.isRequired,
  setNewCommentText: PropTypes.func.isRequired,
};

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
      required: false,
    },
    comment: {
      type: String,
      required: true,
    },
    projectID: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      default :""
    },
    isApproved: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

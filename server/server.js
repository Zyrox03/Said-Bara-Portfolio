// server.js

const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const Comment = require("./models/Comment");
const multer = require("multer");
const bcrypt = require('bcrypt');


const app = express();
const port = process.env.PORT || 3000;

const { storage } = require("./cloudinary/index");
const QuizzEmail = require("./models/QuizzEmail");
const Quote = require("./models/Quote");
const upload = multer({ storage: storage });
// Connect to MongoDB
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  // await mongoose.connect("mongodb://127.0.0.1:27017/SaidBaraPortfolio");
  console.log("Connected to Database");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(helmet());
// Routes

// COMMENTS
app.post("/api/comments", upload.single("photoURL"), async (req, res) => {
  try {
    const { displayName, comment, projectID } = req.body;

    const newComment = new Comment({
      displayName,
      photoURL: req?.file?.path || "",
      comment,
      projectID,
      response: "",
    });

    const savedComment = await newComment.save();

    res
      .status(201)
      .json({ savedComment, message: "Comment added successfully" });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/comments/:projectID", async (req, res) => {
  try {
    const { projectID } = req.params;
    const comments = await Comment.find({ projectID, isApproved: true });
    res.status(200).json({ projectComments: comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({ projectsComments: comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.put("/api/comment/:commentID", async (req, res) => {
  try {
    const { commentID } = req.params;
    const { response, isApproved } = req.body;
    const comment = await Comment.findByIdAndUpdate(
      commentID,
      {
        response,
        isApproved,
      },
      { new: true }
    );

    const projectsComments = await Comment.find({}); // Assuming your model is named Comment

    res.status(200).json({ updatedComment: comment, projectsComments });
  } catch (error) {
    console.error("Error updating comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.delete("/api/comment/:commentID", async (req, res) => {
  try {
    const { commentID } = req.params;
    const comment = await Comment.findByIdAndDelete(commentID);

    const projectsComments = await Comment.find({}); // Assuming your model is named Comment

    res.status(200).json({ updatedComment: comment, projectsComments });
  } catch (error) {
    console.error("Error updating comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// QUIZZ EMAILS

app.post("/api/store-email", async (req, res) => {
  const { email } = req.body;
  try {
    const newEmail = new QuizzEmail({ email });
    await newEmail.save();
    res.status(201).json({ message: "I got your Email" });
  } catch (error) {
    console.error("Error storing email:", error);

    if (error.code === 11000) {
      // Duplicate key error (email already exists)
      res.status(400).json({ error: "Email owner already Won !" });
    } else {
      // Other errors
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  }
});

// QUOTE REQUESTS

app.post("/api/request-a-quote", async (req, res) => {
  const {
    name,
    email,
    company,
    website,
    projectType,
    projectGoals,
    budget,
    message,
  } = req.body;
  try {
    const newQuote = new Quote({
      name,
      email,
      company,
      website,
      projectType,
      projectGoals,
      budget,
      message,
    });
    await newQuote.save();
    res.status(201).json({
      message:
        "Thank you! Your message has been successfully received. I will get back to you shortly",
    });
  } catch (error) {
    console.error("Error requesting quote:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});



// LOGIN LOGIC

const admins = [
  { id: 1, username: 'admin', passwordHash: '$2b$10$G/JezUf//ZXzVj7l8BcN4.EhBm9HE24a/UpwYAkl6.KzWg7MlIif.' },
  // Add more users as needed
];
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Find user by username (replace with database query)
  const user = admins.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Compare hashed passwords
  const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);

  if (isPasswordMatch) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

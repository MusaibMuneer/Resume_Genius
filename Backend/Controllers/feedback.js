const feedback = require("../models/feedback");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postfeed = (req, res) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1]; // Extract the access token from the Authorization header
  const secretKey = process.env.SECRET_KEY;
  const data = req.body.data;

  jwt.verify(accessToken, secretKey, (err, decoded) => {
    if (err) {
      // Access token is invalid or expired
      return res.status(401).send("Unauthorized");
    }

    const userEmail = decoded.email; // Assuming the email is stored in the 'email' claim of the JWT

    const newFeedback = new feedback({ email: userEmail, feedback: data });
    newFeedback
      .save()
      .then(() => {
        res.status(200).send("Feedback Stored");
      })
      .catch(() => {
        res.status(400).send("Feedback lost!");
      });
  });
};

module.exports = postfeed
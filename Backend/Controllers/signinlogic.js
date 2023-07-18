const User = require('../models/to_register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const signinlogic = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); // Find a single user with the given email
    if (user) {
      const pass = await bcrypt.compare(password, user.password);
      if (pass) {
        const secretKey = process.env.SECRET_KEY;
        // console.log(secretKey);
        const accessToken = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' }); // Set expiry for 1 hour
        const refreshToken = jwt.sign({ email: user.email }, secretKey, { expiresIn: '7d' }); // Set expiry for 7 days
        res.status(200).send({ accessToken, refreshToken , message : "user is valid" });
      } else {
        res.status(400).send("Invalid credentials");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = signinlogic;
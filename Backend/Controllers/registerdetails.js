const UsersDaf = require('../models/users_daf');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const registerdetails = (req, res) => {
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader && authHeader.split(' ')[1]; // Extract the access token from the Authorization header
  const secretKey = process.env.SECRET_KEY;
  // console.log(req)
  // Verify and decode the access token to extract the user email
  jwt.verify(accessToken, secretKey, (err, decoded) => {
    if (err) {
      // Access token is invalid or expired
      return res.status(401).send('Unauthorized');
    }

    const userEmail = decoded.email; // Assuming the email is stored in the 'email' claim of the JWT

    const {
      name,
      profession,
      contact,
      email,
      profile,
      careerObjective,
      education,
      skills,
      workexperience,
      languages,
      references,
    } = req.body;

    const user = new UsersDaf({
      name,
      profession,
      contact,
      email,
      profile,
      careerObjective,
      education,
      skills,
      workExperience: workexperience,
      languages,
      references,
      userEmail,
    });

    user
      .save()
      .then(() => {
        res.status(200).send('Details added');
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  });
};

module.exports = registerdetails;

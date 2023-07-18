const User = require('../models/users_daf');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const get_user_details = (req,res) =>{
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1]; // Extract the access token from the Authorization header
    const secretKey = process.env.SECRET_KEY;

    jwt.verify(accessToken, secretKey, (err, decoded) => {
        if (err) {
          // Access token is invalid or expired
          return res.status(401).send('Unauthorized');
        }
    
        const userEmail = decoded.email; // Assuming the email is stored in the 'email' claim of the JWT

        User.find({ email: userEmail })
        .then((details) => {
          if (details.length === 0) {
            // User not found
            return res.status(404).send("User not found!");
          }
          res.status(200).send(details);
        })
        .catch((error) => {
          res.status(500).send("Internal Server Error");
        });

});
}

module.exports = get_user_details;

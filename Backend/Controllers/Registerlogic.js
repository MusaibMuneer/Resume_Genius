const User = require('../models/to_register');
const bcrypt = require('bcrypt');

const Registerlogic = async (req, res) => {
  const obj = req.body;
  for (key in obj) {
    if (key === "password") {
      try {
        const hashedPassword = await bcrypt.hash(obj[key], 10);
        obj[key] = hashedPassword;
      } catch (error) {
        console.log("Error hashing password:", error);
      }
    }
  }
 


  const Userdata = new User(obj);
  Userdata.save()
    .then(() => {
      res.status(200).send("User saved");
    })
    .catch((error) => {
      res.status(404).send("Unable to save user: " + error);
     
    });
};

module.exports = { Registerlogic };

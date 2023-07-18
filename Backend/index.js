const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const Router = require('./Routes/Registerroute')
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Db connected");
}).catch((error) => {
  console.log("Error connecting to Db:", error);
});
  
app.use('/user',Router);

  app.get('/', (req, res) => {
    res.send("hello");
  });
  // console.log(secretKey)
  // fs.writeFileSync('./env', `SECRET_KEY=${secretKey}`);
  // console.log(process.env.SECRET_KEY);
  app.listen(8000, () => {
    console.log("speak! I am listening");
  });
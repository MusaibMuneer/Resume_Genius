import React, { useEffect, useState } from "react";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,AiOutlineMail,AiFillContacts
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Landing.css";
// import Register from "./Register.js"
import Mursi from "./Landing images/mursalan Muneer.jpg";
import Billi from "./Landing images/bilal khan.jpg";
import addy from "./Landing images/Mirza adnan beg.jpg";
import denny from "./Landing images/Zaid denny.jpg";
import dacchi from "./Landing images/muqaddas muneer.jpg";
import abid from "./Landing images/abid.jpg";
import firoj from "./Landing images/firoj.jpg";
import gufi from "./Landing images/gufi.jpg";
import intez from "./Landing images/intez.jpg";
import kaif from "./Landing images/kaif.jpg";
import shafi from "./Landing images/shafi.jpg";
import SHYAN from "./Landing images/SHYAN.jpg";

const card = [
  {
    img: abid,
    name: "Mohd Abid",
    remarks: "I'm impressed with Resume Genius. The templates are professional and easy to customize.",
  },
  {
    img: kaif,
    name: "Kaif Ali Khan",
    remarks: "Resume Genius made it so simple for me to create a professional resume. Highly recommended!",
  },
  {
    img: Billi,
    name: "Bilal Khan",
    remarks:
      "Thanks to Resume Genius, my resume has never looked better! The formatting is sleek and professional.",
  },
  {
    img: firoj,
    name: "Firoj Khan",
    remarks: "I was impressed by how easy Resume Genius made the resume creation process. It's a time-saver!",
  },
  {
    img: dacchi,
    name: "Muqaddas Muneer",
    remarks:
      "Resume Genius saved me so much time and stress. I was able to create a polished resume in just a few minutes!",
  },
  {
    img: shafi,
    name: "Mohammad Shafi Shah",
    remarks: "I recommend Resume Genius to anyone looking for a professional and polished resume. It's a game-changer!",
  },
  {
    img: intez,
    name: "Syed Intezar hussain",
    remarks: "Thanks to Resume Genius, my resume stands out among other applicants. It's a game-changer!",
  },
  {
    img: Mursi,
    name: "Mursalan Muneer",
    remarks:
      "Resume Genius helped me land my dream job with their easy-to-use templates and expert tips. Highly recommend!",
  },
  {
    img: addy,
    name: "Mirza adnan Beg",
    remarks:
      "I've used other resume builders before, but Resume Genius is by far the best. Their templates are modern and eye-catching.",
  },
  {
    img: denny,
    name: "Zaid Denny",
    remarks:
      "I appreciate how user-friendly Resume Genius is. I was able to create a standout resume without any prior experience in resume writing.",
  },
  {
    img: gufi,
    name: "Gufran ahmad khan",
    remarks: "Resume Genius helped me highlight my skills and experiences effectively. Great tool for job seekers!",
  },
  {
    img: SHYAN,
    name: "Shayan Khan",
    remarks: "Resume Genius has a wide selection of templates to choose from. I found the perfect one for my field.",
  },
];
function Landing() {
  const [currentindex, setindex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setindex((x) => (x + 1) % card.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);
  const x = card[currentindex];
  return (
    <div className="Landingstructure">
      <div className="nav">
        <h2 style={{ padding: "5px", color: "white" }}>Resume Genius</h2>
        <div className="listi">
          <Link to="/Register">
            <button
              style={{
                padding: "10px",
                backgroundColor: "",
              }} className="registerbutton"
            >
              <h2>Register</h2>
            </button>
          </Link>
          <Link to="/Signin">
            <button
              style={{
                padding: "10px",
              }} className="signinbutton"
            >
              <h2>Sign in</h2>
            </button>
          </Link>
        </div>
      </div>
      <div className="belownav">
        <div>
          <h1 className="wel">Welcome</h1>
        </div>
        <div className="belowwelcome">
          <div className="aboutus">
            <h1 style={{ textAlign: "center" }}>About us</h1>
            <p className="aboutuspara">
              At Resume Genius, we believe that everyone deserves a chance to
              shine on paper. We understand that building a professional resume
              can be a daunting task, especially for students who are just
              starting out in their career. That's why we've created a platform
              that makes it easy for anyone to create a stunning resume in just
              a few clicks, without the need for any prior experience or
              technical know-how.
            </p>
          </div>
          <div className="reviews">
            {/* <div className='image'> */}
            <img
              src={x.img}
              alt={x.name}
              style={{
                width: "350px",
                height: "447px",
                borderRadius: "5px",
                border: "none",
              }} className="imgx"
            />
            {/* </div> */}
            <div className="remarks" style={{ border: "none" }}>
              <div className="quote">
                <h2>"{x.remarks}"</h2>
              </div>
              <div className="name">
                <h1>{x.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Landingfooter">
        <ul className="Landingfooter-list">
          <li>
            <AiOutlineTwitter /> Twitter
          </li>
          <li>
            <AiFillInstagram /> Instagram
          </li>
          <li>
            <AiFillFacebook /> facebook
          </li>
        </ul>
        <div className="Landingfooter-right">
          <div className="Landingfooter-right-address">
            <span>Address:-</span>
            <p> 123 Main Street, Anytown, USA</p>
          </div>
          <div>
            <AiOutlineMail/>
            <span> email:- Musaibahmed129@gmail.com </span>
          </div>
          <div><AiFillContacts/><span>Contact no - 8799723915</span></div>
          <div><a href="#"><span style={{color:'white'}}>Go to Top</span></a></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

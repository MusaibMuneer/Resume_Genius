import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
const arr = [
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    jobType: "General",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    jobType: "General",
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
    jobType: "General",
  },
  {
    quote:
      "Choose a job you love, and you will never have to work a day in your life.",
    author: "Confucius",
    jobType: "General",
  },
  {
    quote:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    author: "Steve Jobs",
    jobType: "General",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    jobType: "General",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
    jobType: "General",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    jobType: "General",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    jobType: "General",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    jobType: "General",
  },
  {
    quote:
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
    jobType: "General",
  },
  {
    quote:
      "Your talent is God's gift to you. What you do with it is your gift back to God.",
    author: "Leo Buscaglia",
    jobType: "General",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    jobType: "General",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    jobType: "General",
  },
  {
    quote:
      "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
    author: "Chantal Sutherland",
    jobType: "General",
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
    jobType: "General",
  },
];

function Signin() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const Navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/user/signin', { email, password })
      .then((response) => {
        if (response.status === 200) {
          const { accessToken, refreshToken} = response.data;
          Cookies.set('accessToken', accessToken, {sameSite: 'strict', expires: 1 }); // Set secure, same-site, and expiration options as per your requirements
          Cookies.set('refreshToken', refreshToken, { sameSite: 'strict', expires: 7 }); // Set secure, same-site, and expiration options as per your requirements
          // console.log(response);
          // console.log(response);
          Navigate("/Getstarted");
          // Implement the necessary logic based on your framework or library
        } else{
          alert(response.data);
        }
      })
      .catch((e) => {
        alert("Error signing in");
        console.log(e);
      });
  };
  
  
  
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const currentQuote = arr[currentQuoteIndex];

  return (
    <div className="main">
      <div className="forms">
        <div className="signintext">
          <h1 style={{ fontSize: "60px", textAlign: "center" }}>Signin</h1>
          <br />
        </div>
        <form style={{ position: "relative", left: "35%" }} className="signin-form">
          <label htmlFor="myname">
            <h1>Your Name:-</h1>
          </label>
          <input
            type="text"
            name="myname"
            placeholder="Musaib Muneer"
            className="textfield"
          />
          <br />
          <br />
          <br />
          <label htmlFor="myid">
            <h1>Your login id:-</h1>
          </label>
          <input
            type="text"
            name="myid"
            placeholder="musaibahmed129@gmail"
            className="textfield"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <br />
          <br />
          <label htmlFor="confirmpass">
            <h1>Your Password:-</h1>
          </label>
          <input
            type="password"
            name="confirmpass"
            className="textfield"
            onChange={(e) => setpass(e.target.value)}
          />
          <br />
          <br />
          <span>Not Registered Yet?<Link to={"/Register"}>Register</Link></span>
          <button
            type="submit"
            className="subbut"
            style={{
              backgroundColor: "green",
              height: "60px",
              width: "130px",
              color: "whitesmoke",
              marginTop:"10px"
            }}
            onClick={handlesubmit}
          >
            <h2>Submit</h2>
          </button>
        </form>
      </div>
      <div className="quotes">
        <div className="quote-container">
          <p className="quoting">"{currentQuote.quote}"</p>
          <p className="author">{currentQuote.author}</p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
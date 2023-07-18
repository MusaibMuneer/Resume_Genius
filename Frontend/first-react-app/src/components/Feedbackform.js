import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Feedbackform.css";
function Feedbackform() {
  const [data, setdata] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post(
      "https://resume-genius.onrender.com/user/feedback",
      { data },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      }
    );
  };
  const Navigate = useNavigate();
  const handlelogout = (e) => {
    e.preventDefault(); // Prevent the default behavior of the event, if needed

    Cookies.remove("accessToken", { sameSite: "strict" });
    Cookies.remove("refreshToken", { sameSite: "strict" });
    Navigate("/");
  };
  return (
    <div className="Feedbackmain">
      <div className="Feedbackmainform">
        <h1 className="feedbacktitle">Feedback</h1>
        <hr
          style={{
            border: "2px solid black",
            width: "450px",
            position: "relative",
            top: "-20px",
          }}
        ></hr>
        <form className="Feedbackmainactualfeedbackform">
          <label htmlFor="feedback" className="feedbacklabel">
            {" "}
            <h3>Your Message:-</h3>{" "}
          </label>
          <textarea
            className="feedbackmessage"
            name="feedback"
            onChange={(e) => {
              setdata(e.target.value);
            }}
          ></textarea>
        </form>
        <button className="feedbacksubmit" onClick={handlesubmit}>
          <h3>SUBMIT</h3>
        </button>
      </div>
      <div className="starrating">
        <h2 className="rate">Rate Us!</h2>
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
      </div>
      <button className="Logoutfeed" onClick={handlelogout}>
        <h2>Logout</h2>
      </button>
    </div>
  );
}

export default Feedbackform;

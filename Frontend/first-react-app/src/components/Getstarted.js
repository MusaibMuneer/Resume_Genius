import React, { useState } from "react";
import "./Getstarted.css";
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";
import Resumetempelate1 from "./resumetempelate1";
import Resumetempelate2 from "./Resumetempelate2";
// import Resume1 from "./Resume1";
// import Resume2 from "./Resume2";
function Getstarted() {
  const [flag, setFlag] = useState(false);

  function show() {
    setFlag(!flag);
    const middleContainer = document.querySelector(".innerfull-middle-div");
    middleContainer.classList.toggle("active");
  }
  const Navigate = useNavigate();
  const handleresume1 = (e) => {
    Navigate("/Resume1");
  };
  const handlediv1 = (e) => {
    Navigate("/Detailsform");
  };
  const handlediv3 = (e) => {
    Navigate("/Feedback");
  };

  const handlelogout = (e) =>{
    e.preventDefault(); // Prevent the default behavior of the event, if needed

    Cookies.remove('accessToken', { sameSite: 'strict' });
    Cookies.remove('refreshToken', { sameSite: 'strict' });
    Navigate("/")
  }
  return (
    <div className="Getstarted">
      <img
        src="https://wallpaperaccess.com/full/3851200.jpg"
        alt="resume"
        className="gettingstartedimg"
      />
      <div className="mainfull">
        <div className="mainfull-header">
          <h1> Welcome,lets get you started right away</h1>
          <hr style={{ backgroundColor: "black", height: "3px" }} />
        </div>
        {/* <h1>Follow the steps </h1> */}
        <div className="innerfull">
          <div className="innerfull-fst-div" onClick={handlediv1}>
            {/* <Link to={"/Detailsform"}> */}
            <h2 style={{ color: "firebrick" }}>
              Click me to Fill your detailed application Form{" "}
            </h2>
            {/* </Link> */}
          </div>

          {/* <div classname="Getstartedresumetemplates">
              <Resume1 />
              <Resume2 />
            </div> */}
          {/* <Link to={'/Resume1'}> */}
          <div className="innerfull-middle-div">
            <h2 onClick={show}>
              Click me to Choose The Best Template as per your style
            </h2>
            {flag && (
              <div className="Getstartedresumetemplatesflex">
                <div onClick={handleresume1}>
                  <Resumetempelate1 className="resume1" />
                </div>
                <Link to="/Resume2">
                  <div>
                    <Resumetempelate2 />
                  </div>
                </Link>
              </div>
            )}
          </div>
          {/* <Link to=> */}
          <div className="innerfull-last-div" onClick={handlediv3}>
            <h2>Click me for Feedback/Suggestions to help us improve</h2>
          </div>
          {/* </Link> */}
        </div>
        {/* </Link> */}
        <button className="Logout" onClick={handlelogout}><h2>Logout</h2></button>
      </div>
    </div>
  );
}

export default Getstarted;

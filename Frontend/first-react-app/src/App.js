import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Landing from "./components/Landing.js";
import Register from "./components/Register.js";
import Signin from "./components/Signin.js";
import Getstarted from "./components/Getstarted.js";
import Detailsform from "./components/Detailsform.js";
import Resume1 from "./components/Resume1";
import Resume2 from "./components/Resume2";
import Feedbackform from "./components/Feedbackform";

function App() {
  const location = useLocation();

  function isAccessTokenPresent() {
    const accessToken = Cookies.get("accessToken");
    return accessToken !== undefined;
  }

  function isPublicRoute() {
    const publicRoutes = ["/", "/Register", "/Signin"];
    return publicRoutes.includes(location.pathname);
  }

  function renderRoute() {
    if (!isAccessTokenPresent() && !isPublicRoute()) {
      return <Navigate to="/Signin" />;
    } else {
      return (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Getstarted" element={<Getstarted />} />
          <Route path="/Signin/Getstarted" element={<Getstarted />} />
          <Route path="/Detailsform" element={<Detailsform />} />
          <Route path="/Resume1" element={<Resume1 />} />
          <Route path="/Resume2" element={<Resume2 />} />
          <Route path="/Getstarted/Resume1" element={<Resume1 />} />
          <Route path="/Getstarted/Resume2" element={<Resume2 />} />
          <Route path="/Feedback" element={<Feedbackform />} />
        </Routes>
      );
    }
  }

  return <div>{renderRoute()}</div>;
}

export default App;

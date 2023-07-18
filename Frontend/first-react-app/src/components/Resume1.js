import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import "./Resume1.css";
function Resume1() {
  const [data, setData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:8000/user/details", {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        })
        .then((response) => {
          setData(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once
  return (
    <div className="Resume">
      <div className="resumeoneheader">
        <div className="resumeoneheader-image">
          {/* <img
            className="resumeoneheader-imagej"
            src="https://cdn.siasat.com/wp-content/uploads/2023/02/wahaj-ali-ed.jpg"
            alt="resumepic"
            style={{ width: "250px", height: "250px" }}
          /> */}
          {/* <div> */}
          {!selectedImage && (
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {/* <label htmlFor="file-input">Choose File</label> */}
            </div>
          )}
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="resumeoneheader-imagej"
              style={{ width: "250px", height: "250px" }}
            />
          )}
          {/* </div> */}
        </div>
        <div className="resumeoneheaderX">
          <div className="resumeoneheading">
            <h6>{data?.name}</h6>
          </div>
          <div className="resumeonejobtitle">
            <h3>{data?.profession}</h3>
          </div>
        </div>
      </div>
      <div className="resumeonebody">
        <div className="resumeonebodyleft">
          <div className="resumeonebodyleftcontact">
            <h2>CONTACT</h2>
            <div className="resumeonebodyleftcontactno">
              <h3>{data?.contact}</h3>
            </div>
            <div className="resumeonebodyleftemail">
              <h3>{data?.email}</h3>
            </div>
            <div className="resumeonebodywebsite">
              <h3>{data?.profile}</h3>
            </div>
          </div>
          <div className="resumeonebodyleftaboutme">
            <h2>ABOUT ME</h2>
            <h3>{data?.careerObjective}</h3>
          </div>
          <div className="resumeonebodyleftskills">
            <h2>SKILLS</h2>
            <div className="indiviualskills">
              {data?.skills && (
                <ul>
                  {data.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="resumeonebodyleftlanguages">
            <h2>LANGUAGES</h2>
            <div className="indiviuallang">
              {data?.languages && (
                <ul>
                  {data.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="resumeonebodyright">
          <div className="resumeonebodyrighteducation">
            <h2>EDUCATION</h2>
            <div className="resumeonebodyrighteducationlevels">
              {data?.education ? (
                data.education.map((edu, index) => (
                  <div key={index} className="indiviualedu">
                    <h4>{edu.instituteName}</h4>
                    <ul>
                      <li>
                        <h5>Highest Education: {edu.highestEducation}</h5>
                      </li>
                      <li>
                        <h5>Course: {edu.course}</h5>
                      </li>
                      <li>
                        <h5>CGPA: {edu.cgpa}</h5>
                      </li>
                    </ul>
                  </div>
                ))
              ) : (
                <p>No education data available</p>
              )}
            </div>
          </div>

          <div className="resumeonebodyrightworkexp">
            <h2>WORK EXPERIENCE</h2>
            <div className="resumeonebodyrightworkexlevels">
              {data?.workExperience &&
                data.workExperience.slice(0, 2).map((exp, index) => (
                  <div key={index} className="indiviualexp">
                    <h4>{exp.companyName}</h4>
                    <ul>
                      <li>
                        <h5>Job Profile: {exp.jobProfile}</h5>
                      </li>
                      <li>
                        <h5>Tenure: {exp.tenure}</h5>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume1;

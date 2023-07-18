import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import "./Resume2.css";

function Resume2() {
  const [data, setData] = useState({});

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
    <div class="Resume">
      <div className="Resume2-header">
        <div className="Resume2-name">
          {/* <h2>AVERY DAVIS</h2> */}
          <h1>{data?.name}</h1>
        </div>
        <div className="Resume2-designation">
          {/* <h5>Digital Designer</h5> */}
          <h2>{data?.profession}</h2>
        </div>
      </div>
      <div className="Resume2-body">
        <div className="Resume2-body-left">
          <div className="Resume2-body-left-contact">
            <h2>C O N T A C T</h2>
            <div className="Resume2-body-left-contact-number">
              <h4>{data?.contact}</h4>
            </div>
            <div className="Resume2-body-left-contact-email">
              <h4>{data?.email}</h4>
            </div>
            <div className="Resume2-body-left-contact-website">
              <h4>{data?.profile}</h4>
            </div>
          </div>
          <div className="resumetwobodyrighteducation">
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
        </div>
        <div className="Resume2-body-right">
          <h2>S U M M A R Y</h2>
          <div className="Resume2-body-right-summary">
            <h3>{data?.careerObjective}</h3>
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

export default Resume2;

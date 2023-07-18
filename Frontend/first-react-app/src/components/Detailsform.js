import React, { useState,useEffect } from "react";
import "./Detailsform.css";
import { AiFillCloseSquare } from "react-icons/ai";
import axios from 'axios';
import Cookies from 'js-cookie';
function Detailsform() {
  const [name, setname] = useState("");
  const [proff, setproff] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [profile, setprofile] = useState("");
  const [edu, setedu] = useState([]);
  const [skills, setskills] = useState([]);
  const [workexp, setworkexp] = useState([]);
  const [lang, setlang] = useState([]);
  const [refe, setrefe] = useState("");
  const [soloskill, setsoloskill] = useState("");
  const [educationBlocks, setEducationBlocks] = useState(1);
  const [experienceBlocks, setexperienceBlocks] = useState(1);
  const [sololang, setsololang] = useState("");
  const [careerObjective, setcareerObjective] = useState("");
  const [expcompname,setexpcompname] = useState("");
  const [jobprofile,setjobprofile] = useState("");
  const [tenure,settenure] = useState(0);
  const [highestedu,sethighestedu] = useState("");
  const [course,setcourse] = useState("")
  const [Institute,setinstitute] = useState("");
  const [cgpa,setcgpa] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log( profile)
    // const formData = {
    //   name,
    //   profession: proff,
    //   contact,
    //   email,
    //   profile,
    //   careerObjective:careerObjective,
    //   education: edu,
    //   skills,
    //   workexperience: workexp,
    //   languages: lang,
    //   references: refe,
    // };
    axios.post('https://resume-genius.onrender.com/user/register_details', {
  name,
  profession: proff,
  contact,
  email,
  profile,
  careerObjective: careerObjective,
  education: edu,
  skills,
  workexperience: workexp,
  languages: lang,
  references: refe,
}, {
  headers: {
    'Authorization': `Bearer ${Cookies.get('accessToken')}`
  }
})
.then(() => {
  console.log('details added');
})
.catch((error) => {
  console.log(error);
});
  }

  const handleSkillSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (soloskill.trim().length > 0) {
        const updatedSkills = [...skills, soloskill.trim()];
        setskills(updatedSkills);
        setsoloskill("");
      }
    }
  };

  const handlelangSubmit = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      if (sololang.trim().length > 0) {
        const updatedlang = [...lang, sololang.trim()];
        setlang(updatedlang);
        setsololang("");
      }
    }
  };

  const handleEducationAdd = (e) => {
    e.preventDefault();
    if (educationBlocks < 3) {
      setEducationBlocks((prevBlocks) => prevBlocks + 1);
    }
  };

  const handleexpadd = (e) => {
    e.preventDefault();
    if (experienceBlocks < 2) {
      setexperienceBlocks((prevBlocks) => prevBlocks + 1);
    }
  };

  const handleedusubmit = (e) => {
    e.preventDefault();
    const arr = [...edu,{highestEducation:highestedu,course,instituteName:Institute,cgpa}];
    setedu(arr);
    // console.log(edu);
  };

  const handleexpsubmit = (e) => {
    e.preventDefault();
          const arr = [...workexp,{companyName:expcompname,jobProfile:jobprofile,tenure}];
          // console.log(arr);
          setworkexp(arr);
          // console.log(workexp);
  };

  useEffect(() => {
    console.log(workexp);
  }, [workexp]);

  return (
    <div>
      <div className="myfillform">
        <form className="mymainform">
          <h1 className="heading">
            Please fill the following form to the best of your knowledge
          </h1>
          <label htmlFor="name">
            <h2>
              Name:<span style={{ color: "red" }}>*</span>
            </h2>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor="proffesion">
            <h2>
              Profession:<span style={{ color: "red" }}>*</span>
            </h2>
          </label>
          <input
            type="text"
            name="profession"
            value={proff}
            onChange={(e) => setproff(e.target.value)}
          />
          <label htmlFor="contact">
            <h2>
              Contact No:<span style={{ color: "red" }}>*</span>
            </h2>
          </label>
          <input
            type="text"
            name="contact"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          />
          <label htmlFor="Email">
            <h2>
              Email:<span style={{ color: "red" }}>*</span>
            </h2>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor="Career Objective">
            <h2>
              Career Objective:<span style={{ color: "red" }}>*</span>
            </h2>
          </label>
          <textarea
            rows={10}
            cols={4}
            className="CO"
            onChange={(e) => {
              setcareerObjective(e.target.value);
            }}
          ></textarea>
          {careerObjective}
          <label htmlFor="profile">
            <h2>
              Profile URL:<span style={{ color: "red" }}>*</span>
            </h2>
          </label>
          <input
            type="text"
            name="profile"
            value={profile}
            onChange={(e) => setprofile(e.target.value)}
          />
          <div>
            <h2>
              Experience:-<span style={{ color: "red" }}>*</span>
            </h2>
            {Array.from(Array(experienceBlocks), (_, index) => (
              <div key={index} className="experience">
                <label>
                  Company Name<span style={{ color: "red" }}>*</span>
                </label>
                <input type = "text" onChange={(e)=>{setexpcompname(e.target.value)}}/>
                <label>
                  Job Profile<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text"  onChange={(e)=>{setjobprofile(e.target.value)}} />
                <label>
                  Tenure in Years<span style={{ color: "red" }}>*</span>
                </label>
                <input type="number"   onChange={(e)=>{settenure(e.target.value)}} />
                <button className="expsubmit" onClick={handleexpsubmit}>
                  Submit
                </button>
              </div>
            ))}

            {experienceBlocks < 2 && (
              <button onClick={handleexpadd} className="handleexpadd">
                Add more
              </button>
            )}
          </div>
          <div>
            <h2>
              Education:<span style={{ color: "red" }}>*</span>
            </h2>
            {Array.from(Array(educationBlocks), (_, index) => (
              <div key={index} className="education">
                <label>
                  Highest Education<span style={{ color: "red" }}>*</span>
                </label>
                <select  onChange={(e)=>{sethighestedu(e.target.value)}} >
                  <option>select</option>
                  <option>P.G</option>
                  <option>U.G</option>
                  <option>10+2</option>
                </select>
                <label>
                  Course<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text"  onChange={(e)=>{setcourse(e.target.value)}} />
                <label>
                  Institute Name<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text"  onChange={(e)=>{setinstitute(e.target.value)}} />
                <label>
                  CGPA (out of 10)<span style={{ color: "red" }}>*</span>
                </label>
                <input type="number"  onChange={(e)=>{setcgpa(e.target.value)}} />
                <button className="edusubmit" onClick={handleedusubmit}>
                  Submit
                </button>
              </div>
            ))}

            {educationBlocks < 3 && (
              <button
                onClick={handleEducationAdd}
                className="handleEducationAdd"
              >
                Add more
              </button>
            )}
          </div>
          <label htmlFor="Skills">
            <h2>
              Skills:<span style={{ color: "red" }}>*</span>
            </h2>
          </label>
          <div className="skills-container">
            <input
              type="text"
              value={soloskill}
              onChange={(e) => setsoloskill(e.target.value)}
              onKeyUp={handleSkillSubmit}
              className="skilli-input"
            />
            {skills.map((skill, index) => (
              <div key={index} className="skilli">
                {skill}
                <AiFillCloseSquare />
              </div>
            ))}
          </div>

          <label>
            <h2>
              Languages:<span style={{ color: "red" }}>*</span>
            </h2>
          </label>
          <div className="skills-container">
            <input
              type="text"
              value={sololang}
              onChange={(e) => setsololang(e.target.value)}
              onKeyUp={handlelangSubmit}
              className="skilli-input"
            />
            {lang.map((skill, index) => (
              <div key={index} className="skilli">
                {skill}
                <AiFillCloseSquare />
              </div>
            ))}
          </div>

          <label htmlFor="References">
            <h2>References:</h2>
          </label>
          <input
            type="text"
            name="References"
            value={refe}
            onChange={(e) => setrefe(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: "5px",
              backgroundColor: "lightblue",
              marginTop: "20px",
              border: "none",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
              width: "160px",
            }}
            onClick={handleSubmit}
          >
            <h2>SUBMIT</h2>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Detailsform;

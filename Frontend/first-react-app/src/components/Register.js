import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Register() {
  const [confirmpass, setconfirmpass] = useState("");
  const [name,setname] = useState("");
  const [gender,setgender] = useState("")
  const [Qualification,setqualification] = useState("")
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const Navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    if (password === confirmpass) {
      axios.post('https://resume-genius.onrender.com/user/Register',{ Name: name,
      Gender: gender,
      Qualifications:Qualification,
      email,
      password}).then(()=>{
        Navigate("/Signin");
      }).catch((error)=>{
        console.log("Error sending register data:", error);
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);
      })
    } else {
      alert("Password fields do not match");
    }
  };

  return (
    <div className="backg">
      <div className="pages">
        <div className="form">
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>Signup</h1>
          <br></br>
          <form
            style={{ position: "relative", left: "35%" }}
            className="register-form"
            onSubmit={handlesubmit}
          >
            <label htmlFor="myname">
              <h4>Your Name:-</h4>
            </label>
            <input type="text" name="myname" placeholder="Musaib Muneer" onChange={(e)=>{setname(e.target.value)}} />
            <br></br>
            <br></br>
            <label htmlFor="Gender">
              <h4>Gender:-</h4>
            </label>
            <select name="my-dropdown" id="Gender" onChange={(e)=>{setgender(e.target.value)}} >
              <option value="">
                <h5>--select--</h5>
              </option>
              <option value="Male">
                <h5>Male</h5>
              </option>
              <option value="Female">
                <h5>Female</h5>
              </option>
            </select>
            <br></br>
            <br></br>
            {/* {gender.length>0 && <h1>{gender}</h1>} */}
            <label htmlFor="highestqualification">
              <h4>Highest Qualification:-</h4>
            </label>
            <select name="my-dropdown" id="highestqualification"  onChange={(e)=>{setqualification(e.target.value)}}>
              <option value="">
                <h5>--select--</h5>
              </option>
              <option value="UG">
                <h5>UG</h5>
              </option>
              <option value="PG">
                <h5>PG</h5>
              </option>
            </select>
            <br></br>
            <br></br>
            <label htmlFor="myid">
              <h4>Your login id:-</h4>
            </label>
            <input
              type="text"
              name="myid"
              placeholder="musaibahmed129@gmail"
              onChange={(e) => setemail(e.target.value)}
            />
            <br></br>
            <br></br>
            <label htmlFor="firstpass">
              <h4>Set Password:-</h4>
            </label>
            <input
              type="password"
              name="firstpass"
              onChange={(e) => setpass(e.target.value)}
            />
            <br></br>
            <br></br>
            <label htmlFor="confirmpass">
              <h4>Confirm Password:-</h4>
            </label>
            <input
              type="password"
              name="confirmpass"
              onChange={(e) => setconfirmpass(e.target.value)}
            />
            <br></br>
            <br></br>
            <input type="submit" className="subbut" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

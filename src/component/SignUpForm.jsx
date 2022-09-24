import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";

import "../All-Css-Files/singupForm.css";
import updateInputValue from "../utils/genral";
import { LOCAL_STOREGE_USER_KEY } from "../constants";
import {
  usernameVlidation,
  emailVlidation,
  mobileVlidation,
  passwordVlidation,
} from "../utils/validation";

const SignUpForm = () => {
  const [username, updateUsername] = useState("");
  const [email, updateEmail] = useState("");
  const [mobileNumber, updateMobileNumber] = useState("");
  const [password, updatePassword] = useState("");
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  function handelSubmit() {
    const usernameValidationResult = usernameVlidation(username);
    const emailValidationResult = emailVlidation(email);
    const mobileNumberValidationResult = mobileVlidation(mobileNumber);
    const passwordVlidationResult = passwordVlidation(password);

    if (usernameValidationResult.result === false) {
      setError(usernameValidationResult.massege);
      return;
    } else if (emailValidationResult.result === false) {
      setError(emailValidationResult.massege);
    } else if (mobileNumberValidationResult.result === false) {
      setError(mobileNumberValidationResult.massege);
    } else if (passwordVlidationResult.result === false) {
      setError(passwordVlidationResult.massege);
    } else {
      let userDetails = JSON.parse(
        localStorage.getItem(LOCAL_STOREGE_USER_KEY)
      );
      userDetails = userDetails === null ? [] : userDetails;
      localStorage.setItem(
        LOCAL_STOREGE_USER_KEY,
        JSON.stringify([
          ...userDetails,
          {
            username,
            email,
            mobileNumber,
            password,
          },
        ])
      );
      navigate("/LogIn");
    }
  }

  return (
    <div>
      <div className="container_for_box">
        <Box
         className="box2"
        >
          <h2 style={{ margin: 30 }}>SingUp</h2>
            <p style={{color:'red',}}>{error}</p>
          <div className="input_filed">
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter UserName"
              variant="outlined"
              value={username}
              onChange={(event) => {
                updateInputValue(event, updateUsername);
              }}
            />
           
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              value={email}
              onChange={(event) => {
                updateInputValue(event, updateEmail);
              }}
            />
            <TextField
              type="text"
              id="outlined-basic"
              label="Number"
              variant="outlined"
              value={mobileNumber}
              onChange={(event) => {
                updateInputValue(event, updateMobileNumber);
              }}
            />
            <TextField
              type="text"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(event) => {
                updateInputValue(event, updatePassword);
              }}
            />

            <Button variant="contained" onClick={handelSubmit}>
              SignUp
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SignUpForm;

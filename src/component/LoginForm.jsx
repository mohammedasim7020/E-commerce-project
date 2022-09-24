import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "../All-Css-Files/loginForm.css";
import { LOCAL_STOREGE_USER_KEY } from "../constants";
import { LOCLA_STOREGE_LOGGED_KEY } from "../constants";
import updateInputValue from "../utils/genral";
import { usernameVlidation, passwordVlidation } from "../utils/validation";

export default function LoginForm(props) {
  const { setData } = props;
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();

  function getData(e) {
    // e.preventDefault()
    const UsernameValidationResult = usernameVlidation(username);
    const passwordVlidationResult = passwordVlidation(password);

    if (UsernameValidationResult === false) {
      setError(UsernameValidationResult.massege);
    } else if (passwordVlidationResult === false) {
      setError(passwordVlidationResult.massege);
    } else {
      const userList = JSON.parse(localStorage.getItem(LOCAL_STOREGE_USER_KEY));
      const result = userList.find(
        (user) => user.username === username && user.password === password
      );
      console.log(result);
      if (result) {
        setData(result);
        localStorage.setItem(LOCLA_STOREGE_LOGGED_KEY, JSON.stringify(result));
        history("/");
      } else {
        alert("invalid user");
      }
    }
  }

  return (
    <div className="main_container_for_log">
      <Box
      className="box"
        sx={{
          // width: 330,
          // height: 380,
          // backgroundColor: "white",
          // "&:hover": {
          //   backgroundColor: "",
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <p style={{ color: "red" }}>{error}</p>
        <div className="input_fileds">
          <h2 style={{ margin: 20 }}>LogIn </h2>
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
            label="Enter Password"
            variant="outlined"
            value={password}
            onChange={(event) => {
              updateInputValue(event, updatePassword);
            }}
          />

          <Button variant="contained" onClick={() => getData()}>
            LogIn
          </Button>
        </div>
      </Box>
    </div>
  );
}

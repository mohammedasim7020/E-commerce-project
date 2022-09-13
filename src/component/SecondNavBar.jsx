import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
// import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ACTION_TYPES } from "../constants";

const SecondNavBar = ({ isLoggedIn }) => {
  const [value, setValue] = useState(0);
  const [searchData, setsearchData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setsearchData(search);
  };

  const handleSearchData = (e) => {
    dispatch({
      type: ACTION_TYPES.HANDLE_SEARCH,
      payload: { searchData },
    });
  };
const goToHome = ()=> navigate("/Home")

  // const products = useSelector((state)=>{

  // })
  return (
    <div>
      {isLoggedIn ? (
        <Box sx={{ width: "100%" }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            <Tab label="home" onClick={goToHome}/>
            <Tab label="mobiles" />
            <Tab label="Laptops" />
            <Tab label="Electronics" />
            <Tab label="Mans" />
            <Tab label="womens" />
            <Tab label="kids" />
         
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Search..."
                id="outlined-size-small"
                // defaultValue="Small"
                size="small"
                sx={{ margin: 2 }}
                onChange={(event) => handleSearch(event)}
              />
            </Box>
            <Button
              sx={{ height: 40, margin: 1 }}
              variant="contained"
              onClick={() => handleSearchData()}
            >
              Search
            </Button>
          </Tabs>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};

export default SecondNavBar;

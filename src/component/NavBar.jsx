import React from "react";
import { useNavigate,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {Badge }from "@mui/material";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import PlaylistAddCircleSharpIcon from "@mui/icons-material/PlaylistAddCircleSharp";

import { LOCLA_STOREGE_LOGGED_KEY } from "../constants";
import { Button } from "@mui/material";

const NavBar = (props) => {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const { isLoggedIn, data, setData } = props;



  let navigate = useNavigate();

  function logoutuser() {
    setData({});
    localStorage.setItem(LOCLA_STOREGE_LOGGED_KEY, JSON.stringify({}));
    navigate("/LogIn");
  }


  const goToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="Navigation-bar">
        <div className="Navigation-rigthside">
          <h2 onClick={(e) => goToHome(e)}>E-Commerce</h2>
        </div>

        <div className="navigation_leftside">
          <Link className="link" to="/LogIn">
            {isLoggedIn ? (
              ""
            ) : (
              <Button variant="contained" sx={{ background: "blue" }}>
                {"login"}
              </Button>
            )}
          </Link>

          <Link className="link" to="/SingUp">
            {isLoggedIn ? (
              ""
            ) : (
              <Button variant="contained" sx={{ background: "blue" }}>
                SingUp
              </Button>
            )}
          </Link>

          <h4 style={{ color: "white" }}>{isLoggedIn ? data.username : ""}</h4>

          <Link className="link" to="/AddProduct">
            {isLoggedIn ? (
              <p>
                {" "}
                <PlaylistAddCircleSharpIcon sx={{ fontSize: 25 }} />
                Add Products
              </p>
            ) : (
              ""
            )}
          </Link>

          <Link to="/addToCart">
            {isLoggedIn ? (
              <Badge color="secondary" badgeContent={cart?.length}>
                <AddShoppingCartIcon
                 sx={{color:"white"}}
                  onClick={() => {
                    navigate("/AddToCart");
                  }}
                />
              </Badge>
            ) : (
              ""
            )}
          </Link>

          <h4 className="btn" onClick={logoutuser}>
            {isLoggedIn ? (
              <p className="link">
                <LogoutSharpIcon sx={{ color: "white", fontSize: 25 }} /> LogOut
              </p>
            ) : (
              ""
            )}
          </h4>
        </div>
      </div>
    </>
  );
};
export default NavBar;

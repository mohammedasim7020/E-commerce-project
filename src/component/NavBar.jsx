import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import PlaylistAddCircleSharpIcon from "@mui/icons-material/PlaylistAddCircleSharp";

import { LOCLA_STOREGE_LOGGED_KEY } from "../constants";
import { Button } from "@mui/material";

const NavBar = (props) => {
  const selector = useSelector((state) => {
    return {
      lengthArray: state.lengthA,
    };
  });
  const { lengthArray } = selector;
  // const dispatch = useDispatch();
  const { isLoggedIn, data, setData } = props;
  // const [searchData, setsearchData] = useState("");

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  // const handleSearch = (e) => {
  //   const search = e.target.value;
  //   setsearchData(search);
  // };

  let navigate = useNavigate();

  function logoutuser() {
    setData({});
    localStorage.setItem(LOCLA_STOREGE_LOGGED_KEY, JSON.stringify({}));
    navigate("/LogIn");
  }

  // const selector = useSelector((state) => {
  //   return state.input_data;
  // });

  // const handleSearchData = (e) => {
  //   dispatch({
  //     type: ACTION_TYPES.HANDLE_SEARCH,
  //     payload: { searchData },
  //   });
  // };

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

          <h4 style={{color:"white"}}>{isLoggedIn ? data.username : ""}</h4>

          <Link className="link" to="/AddProduct">
            {isLoggedIn ? <PlaylistAddCircleSharpIcon sx={{fontSize:35}}/> : ""}
          </Link>

          <Link to="/addToCart" className="link">
            {isLoggedIn ? (
              <StyledBadge badgeContent={lengthArray + 1} color="secondary">
                <AddShoppingCartIcon
                  onClick={() => {
                    navigate("/AddToCart");
                  }}
                />
                Cart
              </StyledBadge>
            ) : (
              ""
            )}
          </Link>

          <h4 className="btn" onClick={logoutuser}>
            {isLoggedIn ? <LogoutSharpIcon sx={{ color: "white" ,fontSize:30}} /> : ""}
          </h4>
        </div>
      </div>
    </>
  );
};
export default NavBar;

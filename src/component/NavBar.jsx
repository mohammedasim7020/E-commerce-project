import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import { LOCLA_STOREGE_LOGGED_KEY } from "../constants";


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
    navigate("/Home");
  };

  return (
    <>
      <div className="Navigation-bar">
        <div className="Navigation-rigthside">
          <h2 onClick={(e) => goToHome(e)}>E-Commerce</h2>
        </div>
        {/* <input
          type={searchData}
          placeholder="Search"
          onChange={(e) => handleSearch(e)}
        />

        <Button
          variant="contained"
          className="button_from_nav"
          onClick={handleSearchData}
        >
          Search
        </Button> */}

        <div className="navigation_leftside">
          <h4>
            <Link className="link" to="/LogIn">
              {isLoggedIn ? "" : "login"}
            </Link>
          </h4>

          <h4>
            <Link className="link" to="/SingUp">
              {isLoggedIn ? "" : "SingUp"}
            </Link>
          </h4>

          <h4>
            <Link className="link" to="/username">
              {isLoggedIn ? data.username : ""}
            </Link>
          </h4>

          <Link className="link" to="/AddProduct">
            {isLoggedIn ? "Add Products" : ""}
          </Link>

          <StyledBadge badgeContent={lengthArray + 1} color="secondary">
            <Link to="/addToCart" className="link">
              {isLoggedIn ? (
                <AddShoppingCartIcon
                  onClick={() => {
                    navigate("/AddToCart");
                  }}
                />
              ) : (
                ""
              )}
              cart
            </Link>
          </StyledBadge>

          <h4 className="btn" onClick={logoutuser}>
            {isLoggedIn ? "LogOut" : ""}
          </h4>
        </div>
      </div>
    </>
  );
};
export default NavBar;

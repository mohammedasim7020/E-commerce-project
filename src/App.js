import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./App.css";
import { ACTION_TYPES, LOCLA_STOREGE_LOGGED_KEY } from "./constants";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingUp from "./pages/SignUp";
import AddProducts from "./component/AddProducts";
import { fetchAllProducts } from "./apis/products";
import AddToCart from "./pages/AddToCart";
import AddressPage from "./pages/AddressPage";
import OrderHistory from "./component/OrderHistory";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [data]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem(LOCLA_STOREGE_LOGGED_KEY));
    if (getData) {
      setData(getData);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchedData = fetchAllProducts();
    fetchedData.then((res) => {
      const data = res.data;

      dispatch({
        type: ACTION_TYPES.ADD_PRODUCTS,
        payload: { data },
      });
    });
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <Router>
          <NavBar setData={setData} data={data} isLoggedIn={isLoggedIn} />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/LogIn"
              element={
                <Login setData={setData} setIsLoggedIn={setIsLoggedIn} />
              }
            />
            <Route exact path="/SingUp" element={<SingUp />} />
            <Route exact path="/AddProduct" element={<AddProducts />} />

            <Route exact path="/AddToCart" element={<AddToCart />}></Route>
            <Route exact path="/Address" element={<AddressPage />}></Route>
            <Route
              exact
              path="/orderHistory"
              element={<OrderHistory />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import { ACTION_TYPES } from "../constants";
// import SecondNavBar from "../component/SecondNavBar";
import "../All-Css-Files/home.css";
//Here start home page
const Home = () => {
  const [newfilterdata, setnewfilterdata] = useState([]);
  const [searchData, setsearchData] = useState("");

  const dispatch = useDispatch();

  const allProducts = useSelector((state) => {
    return {
      products: state.product,
      // inputValue: state.input_data,
    };
  });

  const { products } = allProducts;

  const handleSearch = (event) => {
    const change = event.target.value;
    setsearchData(change);
  };

  useEffect(() => {
    const filterdData = products.filter((item) => {
      if (
        item.category.toLowerCase().match(searchData) ||
        item.title.toLowerCase().match(searchData)
      ) {
        return true;
      }
      return false;
    });
    setnewfilterdata(filterdData);
  }, [products, searchData]);

  // category wise filter on button //
  const filterItem = (category) => {
    let categoryResult = products.filter((item) => {
      return item.category === category;
    });

    setnewfilterdata(categoryResult);
  };

  return (
    <>
      <section>
        <div className="second-nav-bar">
          <div className="right-side-nav">
            <Button onClick={() => setnewfilterdata(products)}>Home</Button>
            <Button onClick={() => filterItem("men's clothing")}>Mens</Button>
            <Button onClick={() => filterItem("women's clothing")}>
              Womens
            </Button>
            <Button onClick={() => filterItem("electronics")}>
              Electronics
            </Button>
            <Button onClick={() => filterItem("jewelery")}>Jewellery</Button>
          </div>
          <div className="left-side-nav">
            <TextField
              label="Search..."
              id="outlined-size-small"
              size="small"
              value={searchData}
              onChange={(event) => handleSearch(event)}
            />
            <Button variant="contained">Search</Button>
          </div>
          <div className="for-sort">
            <h5>Sort</h5>
          </div>
        </div>
      </section>
      <div className="main">
        <div className="front_page">
          {newfilterdata?.length === 0 ? (
            <div>No product available</div>
          ) : (
            newfilterdata?.map((product, index) => {
              return (
                <>
                  <div key={index} className="main_card_container">
                    <div className="set_card_container">
                      <img
                        className="img"
                        src={product.image}
                        alt="couden't respond"
                        width="130px"
                        height="130px"
                      />
                      <h5 className="for-title">{product.title}</h5>
                      <h4>Rating {product.rating.rate}</h4>
                      <h4>Price ${product.price}</h4>

                      <Button
                        variant="contained"
                        onClick={() => {
                          dispatch({
                            type: ACTION_TYPES.ADD_TO_CART,
                            payload: {
                              product,
                            },
                          });
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

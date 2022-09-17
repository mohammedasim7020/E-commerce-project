import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SimpleImageSlider from "react-simple-image-slider";
import SortSharpIcon from '@mui/icons-material/SortSharp';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { ACTION_TYPES } from "../constants";
// import SecondNavBar from "../component/SecondNavBar";
import "../All-Css-Files/home.css";

const images = [
  {
    url: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/e0fcdef437f82323.jpg?q=50",
  },
  {
    url: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/a0a5d1c6f8df28b8.jpg?q=50",
  },
  {
    url: "https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/1d271d50a63cc18a.jpg?q=50",
  },
  // { url: "image.png" },
  // { url: "images/5.jpg" },
  // { url: "images/6.jpg" },
  // { url: "images/7.jpg" },
];

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
              sx={{ width: "90rem" }}
              label="Search..."
              id="outlined-size-small"
              size="small"
              value={searchData}
              onChange={(event) => handleSearch(event)}
            />
            {/* <Button variant="contained">Search</Button> */}
          </div>
          <div className="for-sort">
            <h4>
              Sort
              <SortSharpIcon />
            </h4>
          </div>
        </div>
      </section>
      <section>
        <SimpleImageSlider
          width={1330}
          height={350}
          paddin={50}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
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
                      {/* <h4>Rating {product.rating.rate}</h4> */}
                      <Rating
                        name="text-feedback"
                        value={product.rating.rate}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
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

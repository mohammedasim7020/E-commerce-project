import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { useDispatch } from "react-redux";
// import axios from "axios";

import "../All-Css-Files/add-products.css";
import updateInputValue from "../utils/genral";
import { ACTION_TYPES } from "../constants";



const AddProducts = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [category, setCategroy] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [price, setPrice] = useState("");
  // const [dataPost, setDataPost] = useState({});

  let object = {
    id,
    title,
    category,
    rate,
    price,
  };

  const handleAddProduct = (e) => {
    // e.preventDefault();
    // const postData = axios
    //   .post("https://fakestoreapi.com/products", {
    //     id,
    //     categroy,
    //     title,
    //     price,
    //   })
    //   .then((result) => setDataPost(result.data));
      
      dispatch({
        type:ACTION_TYPES.ADD_NEW_PRODUCT,
        payload: object,
      });
    };
    

  return (
    <div className="mian-container">
      <div className="add-products-container">
        <Box
          sx={{
            border: 1,
            width: 450,
            height: 600,
            backgroundColor: " #E6E6FA",
            // "&:hover": {
            //   backgroundColor: "",
            //   opacity: [0.9, 0.8, 0.7],
            // },
          }}
        >
          <div className="text-fields">
            <h2>Add Products</h2>
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter Id"
              variant="outlined"
              value={id}
              name="Id"
              onChange={(e) => {
                updateInputValue(e, setId);
              }}
            />

            <TextField
              type="text"
              id="outlined-basic"
              label="Enter Categroy"
              variant="outlined"
              value={category}
              name="Categroy"
              onChange={(e) => {
                updateInputValue(e, setCategroy);
              }}
            />
            <TextField
              type="text"
              id="outlined-basic"
              label="Enter Title"
              variant="outlined"
              value={title}
              name="title"
              onChange={(e) => {
                updateInputValue(e, setTitle);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter rate"
              variant="outlined"
              type="text"
              value={rate}
              name="rating"
              onChange={(e) => {
                updateInputValue(e, setRate);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter Price"
              variant="outlined"
              type="text"
              value={price}
              name="price"
              onChange={(e) => {
                updateInputValue(e, setPrice);
              }}
            />
            <Button
              variant="contained"
              disableElevation
              onClick={(e) => handleAddProduct(e)}
            >
              Add Products
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AddProducts;

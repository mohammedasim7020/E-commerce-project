import React, { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

import { ACTION_TYPES } from "../constants";
import "../All-Css-Files/addtocart.css";

function updateProductQuantity(id, quantity, products) {
  const updateProducts = JSON.parse(JSON.stringify(products));
  const upadateTextIndex = updateProducts.findIndex(
    (product) => product.id === id
  );
  updateProducts[upadateTextIndex].quantity = quantity > 0 ? quantity : 1;
  return updateProducts;
  /*  return products.map((item)=>{
    if(item.id === id ){
      return {
        ...products,
        qty:quantity + 1
      }
    }
    return item
  })*/
}

const AddToCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);

  const subTotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    setTotal(subTotal);
  }, [subTotal]);

  // useEffect(() => {
  //   const filterdProduct = products.filter((item) => {
  //     if (cart[item.id]) {
  //       console.log(cart[item.id])
  //       return true;
  //     }
  //     return false;
  //   });
  //   setCartProducts(filterdProduct);

  // }, [products, cart]);

  const handleRemove = (item) => {
    dispatch({
      type: ACTION_TYPES.HANDLE_REMOVE,
      payload: { removeProduct: item },
    });
  };

  const handleQtyIncrement = (item) => {
    const updateProducts = updateProductQuantity(
      item.id,
      item.quantity + 1,
      cartProducts
    );
    dispatch({
      type: ACTION_TYPES.UPDATE_CART,
      payload: { cartProduct: updateProducts },
    });
  };

  const handleQtyDecrement = (item) => {
    const updateProducts = updateProductQuantity(
      item.id,
      item.quantity - 1,
      cartProducts
    );
    dispatch({
      type: ACTION_TYPES.UPDATE_CART,
      payload: { cartProduct: updateProducts },
    });
  };

  const goToAddressPage = () => {
    navigate("/Address");
  };

  return (
    <>
      {" "}
      <div className="flex">
        <div className="main_addtocard_div">
          {cartProducts.length === 0 ? (
            <div>No Product Available</div>
          ) : (
            cartProducts.map((item, index) => {
              return (
                <>
                  <div key={index} className="parent">
                    <div className="img_container">
                      <img
                        className="addToCart_img"
                        src={item.image}
                        alt="couden't respond"
                        width="150px"
                        height="150px"
                      />
                      <div className="product_details">
                        <h3>{item.title}</h3>
                        <p className="discription">{item.description}</p>
                        <h3>Price : {item.price}</h3>
                        <div className="qty_container">
                          <Button
                            className="btn"
                            variant="contained"
                            onClick={() => {
                              handleQtyDecrement(item);
                            }}
                          >
                            -{" "}
                          </Button>
                          <h4>{item.quantity}</h4>
                          <Button
                            className="btn"
                            variant="contained"
                            onClick={() => handleQtyIncrement(item)}
                          >
                            {" "}
                            +{" "}
                          </Button>
                        </div>
                      </div>
                      <div className="delete_icon">
                        <DeleteForeverIcon onClick={() => handleRemove(item)} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
        {cartProducts.length === 0 ? (
          ""
        ) : (
          <div className="price_container">
            <h2>Your Total is:{total}</h2>
            <Button variant="contained" onClick={() => goToAddressPage()}>
              PlaceOrder
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default AddToCart;

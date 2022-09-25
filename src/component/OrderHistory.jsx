import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../All-Css-Files/orderHistroy.css";

const OrderHistory = () => {
  const [cartData, setCartData] = useState([]);

  const selector = useSelector((state) => {
    return state.addressDetails;
  });
  // console.log("orderHistory",cartData)
  useEffect(() => {
    if (selector) {
      setCartData(selector);
    }
  }, [selector]);

  return (
    <>
      <div className="wraper">
        <h3>Order List</h3>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          {cartData.length === 0 ? null : (
            <div className="filterd-products">
              <h4>filter order</h4>
            </div>
          )}
          <div className="main-div">
            {cartData.map((item) => {
              return (
                <>
                  {item.item.map((product) => {
                    return (
                      <>
                        <div className="product-orderd-list" key={product.id}>
                          <div className="product-list">
                            <img
                              src={product.image}
                              width="70px"
                              height="70"
                              alt=""
                            />
                            <h4 className="heading">{product.title}</h4>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;

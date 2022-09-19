import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const OrderHistory = () => {
  const [cartData, setCartData] = useState([]);

  const selector = useSelector((state) => {
    return state.addressDetails;
  });
  useEffect(() => {
    if (selector) {
      setCartData(selector);
    }
  }, [selector]);

  return (
    <div>
      {cartData.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="" width="150px" hight="150px" />
            <p>{item.title}</p>
            <h4>{item.fullName}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default OrderHistory;

import { configureStore } from "@reduxjs/toolkit";
import { ACTION_TYPES } from "./constants";

const INITIAL_state = {
  product: [],
  input_data: "",
  cart: [],
  addressDetails: [],
};

const store = configureStore({
  reducer: (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case ACTION_TYPES.ADD_PRODUCTS:
        return {
          ...state,
          product: payload.data,
        };

      case ACTION_TYPES.ADD_NEW_PRODUCT:
        const { id, category, title, rate, price } = payload;
        return {
          ...state,
          product: [
            ...state.product,
            { id, category, title, rating: { rate }, price },
          ],
        };

      case ACTION_TYPES.HANDLE_SEARCH:
        // console.log("====>".state);
        return {
          ...state,
          input_data: payload.searchData,
        };

      case ACTION_TYPES.ADD_TO_CART:
        const { product } = payload;
        return {
          ...state,
          cart: [
            ...state.cart.filter((item) => item.id !== product.id),
            { ...product, quantity: 1 },
          ]
        
        };

      case ACTION_TYPES.UPDATE_CART:
        const { cartProduct } = payload;
        return {
          ...state,
          cart: cartProduct,
        };

      case ACTION_TYPES.HANDLE_REMOVE:
        const { removeProduct } = payload;
        return {
          ...state,
          cart: [...state.cart.filter((item) => item !== removeProduct)],
        };

      case "addressDetails":
        const { cart, addressDetails } = payload;
        return {
          ...state,
          addressDetails: [...state.addressDetails, ...cart, addressDetails],
        };

      default:
        return INITIAL_state;
    }
  },
});
export default store;

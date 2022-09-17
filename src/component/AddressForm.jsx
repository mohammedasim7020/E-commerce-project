import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import updateInputValue from "../utils/genral";
import "../All-Css-Files/address-form.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFFFFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddressForm = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const obj = {
    fullName,
    address,
    apartment,
    city,
    state,
    country,
    pinCode,
  };

  const cart = useSelector((state) => {
    return state.cart;
  });

  const addressData = () => {
    dispatch({
      type: "addressDetails",
      payload: {
        cart,
        addressDetails: obj,
      },
    });
    navigate("/orderHistory");
  };
  return (
    <div className="form_box">
      <Box
        className="box"
        sx={{
          border: 1,
          padding: 5,
          width: 330,
          height: 500,
          backgroundColor: " #E6E6FA",

          // "&:hover": {
          //   backgroundColor: "",
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <h3>Enter Your Address Details</h3>
        <TextField
          type="text"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          value={fullName}
          onChange={(event) => updateInputValue(event, setFullName)}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="Full Address"
          variant="outlined"
          value={address}
          onChange={(event) => updateInputValue(event, setAddress)}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="Apartment,suit,etc."
          variant="outlined"
          value={apartment}
          onChange={(event) => updateInputValue(event, setApartment)}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={(event) => updateInputValue(event, setCity)}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label=" State"
          variant="outlined"
          value={state}
          onChange={(event) => updateInputValue(event, setState)}
        />

        <TextField
          type="text"
          id="outlined-basic"
          label=" country"
          variant="outlined"
          value={country}
          onChange={(event) => updateInputValue(event, setCountry)}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="PinCode"
          variant="outlined"
          value={pinCode}
          onChange={(event) => updateInputValue(event, setPinCode)}
        />
        <Button variant="contained" onClick={() => handleOpen()}>
          Add Delivery Address
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "large" }}
          >
            <CheckCircleOutlineIcon sx={{ color: "green" }} /> Congratulation
            Your Order Is successfully
          </Typography>

          <Button
            sx={{ margin: 3 }}
            variant="contained"
            onClick={() => addressData()}
          >
            Ok
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddressForm;



function usernameVlidation(username) {
  if (username === "") {
    return {
      massege: "Please Enter your Name",
      result: false,
    };
  } else {
    return {
      massege: "successful",
      result: true,
    };
  }
}

function emailVlidation(email ) {
  if (email === "" || !email.includes('@')) {
    return {
      massege: "Please Enter your Email",
      result: false,
    };
  } else {
    return {
      massege: "successful",
      result: true,
    };
  }
}

function mobileVlidation(mobileNumber) {
  if (mobileNumber === "" ) {
    return {
      massege: "Please Enter your mobile Number",
      result: false,
    };
  } else {
    return {
      massege: "successful",
      result: true,
    };
  }
}

function passwordVlidation(password) {
  if (password === "" && password.length < 5) {
    return {
      massege: "Please Enter your password",
      result: false,
    };
  } else {
    return {
      massege: "successful",
      result: true,
    };
  }
}
export {
  usernameVlidation,
  emailVlidation,
  mobileVlidation,
  passwordVlidation,
};

const updateInputValue = (event,updateFunction) => {
    const data = event.target.value;
    updateFunction(data);
}
export default updateInputValue




// if (user name === "") {
    //   setError(true);
    // } else if (email === "" && email.includes("@")) {
    //   setError(true);
    // } else if (isNaN.mobileNumber === "") {
    //   setError(true);
    // } else if (password === "") {
    //   setError(true);
    // } else {
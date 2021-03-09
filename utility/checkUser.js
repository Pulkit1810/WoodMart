const checkUser = (username, response) => {
    let isUserValid = false;
    response.map((data) => {
        console.log("I am in map");
        if (data.username === username) {
            isUserValid = true;
        }
    });
    return isUserValid;
};



export default checkUser;
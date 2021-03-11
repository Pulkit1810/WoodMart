import fetchUsers from "../service/fetchUsers.js";
import checkUser from "../utility/checkUser.js";

const DOMUserInput = document.querySelector("#user-input");

let recievedFunc = fetchUsers();
setTimeout(() => {
    console.log(recievedFunc())
}, 2000);
var result;
$(document).ready(function() {
    $("#user-input").blur(function() {

        let response = recievedFunc();
        let userInput = DOMUserInput.value;
        const verify = checkUser(userInput, response);
        if (verify) {
            result="Correct Username";
            document.getElementById("loginresult").innerHTML=result;
        } else {
            result="Inorrect Username";
            document.getElementById("loginresult").innerHTML=result;
        }



    });
});
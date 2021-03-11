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
       
            document.querySelector(".correct-username").classList.add("username-validation-correct");
            document.querySelector(".correct-username").innerHTML=result;
     
        } else {
            result="Incorrect Username";
            
            document.querySelector(".correct-username").classList.remove("username-validation-correct");
            document.querySelector(".correct-username").classList.add("username-validation-failed");
            document.querySelector(".correct-username").innerHTML=result;
           
        }



    });
});
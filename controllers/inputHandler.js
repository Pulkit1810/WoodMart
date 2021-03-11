/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import fetchUsers from '../service/fetchUsers.js';
import checkUser from '../utility/checkUser.js';

const DOMUserInput = document.querySelector('#user-input');

const recievedFunc = fetchUsers();
setTimeout(() => {
  console.log(recievedFunc());
}, 2000);
let result;

$(document).ready(() => {
  $('#user-input').blur(() => {
    const response = recievedFunc();
    const userInput = DOMUserInput.value;
    const verify = checkUser(userInput, response);
    if (verify) {
      result = 'Correct Username';
      document.querySelector('.correct-username').classList.add('username-validation-correct');
      document.querySelector('.correct-username').innerHTML = result;
    } else {
      result = 'Incorrect Username';
      document.querySelector('.correct-username').classList.remove('username-validation-correct');
      document.querySelector('.correct-username').classList.add('username-validation-failed');
      document.querySelector('.correct-username').innerHTML = result;
    }
  });
});

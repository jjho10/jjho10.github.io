// Login and Greetings
import "./style.css";
HIDDEN_CLASSNAME = "hidden";
USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greetings = document.querySelector("#greetings");
const logoutBtn = document.querySelector("#logout")

function loadLogin(){
    const savedName = localStorage.getItem(USERNAME_KEY)
    if (savedName === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    }else{
        printGreeting(savedName);
    }
}

function printGreeting(username){
    greetings.innerText = `Hello, ${username}!`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greetings.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function onLogin(event){
    event.preventDefault()
    loginID = loginInput.value;
    localStorage.setItem(USERNAME_KEY,loginID);
    console.log(loginID);
    printGreeting(loginID);
}

function onLogout(event){
    localStorage.removeItem(USERNAME_KEY);
    loginInput.value = "";
    greetings.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLogin);
logoutBtn.addEventListener("click",onLogout);

loadLogin()

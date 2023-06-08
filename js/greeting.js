const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const logoutForm = document.querySelector("#logout-form");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "username";

// 로그인 제출
function onLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

// 로그아웃 제출
function onLogoutSubmit(event) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);

    localStorage.removeItem(USERNAME_KEY);
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Welcome ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.addEventListener("submit", onLogoutSubmit);
    paintGreetings();
}
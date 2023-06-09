const clock = document.querySelector("h2#clock");
const dateText = document.querySelector("h2#date");

function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const years = String(date.getFullYear()).padStart(4, "0");
    const months = String(date.getMonth() + 1).padStart(2,"0");
    const days = String(date.getDate()).padStart(2, "0");

    dateText.innerText = `${years}년 ${months}월 ${days}일`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
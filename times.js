// Calendar and Clocks
const calendar = document.querySelector(".calendar");
const clock = document.querySelector(".clock");
const weekday = ["일", "월", "화", "수", "목", "금", "토"];

function updateClock(event) {
    const now = new Date();
    calendar.innerText = `${now.getFullYear()}년 ${now.getMonth().toString().padStart(2,"0")}월 ${now.getDate().toString().padStart(2,"0")}일 (${weekday[now.getDay()]})`
    clock.innerText = `${now.getHours().toString().padStart(2,"0")} : ${now.getMinutes().toString().padStart(2,"0")} : ${now.getSeconds().toString().padStart(2,"0")}`
}

const now = new Date();
updateClock();
setInterval(updateClock, 1000);
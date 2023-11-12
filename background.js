// Background Images
const images = ["london0.jpg", "rome0.jpg", "seoul0.jpg"];

const chosenImg = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);
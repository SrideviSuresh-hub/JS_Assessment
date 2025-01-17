let score = 0;
const container = document.getElementById("img-container");
const scoreUp = document.getElementById("score");
const imageArray = [
  "images/img1.png",
  "images/img2.png",
  "images/img3.png",
  "images/img4.png",
  "images/img5.png",
  "images/img6.png",
  "images/img7.png",
  "images/img8.png",
  "images/img9.png",
  "images/img10.png",
];
let interval;
let fruits = [];

function create() {
  container.innerHTML = ""; 
  fruits = []; 
  imageArray.forEach((image) => {
    const fruit = document.createElement("img");
    fruit.src = image;
    fruit.classList.add("images");
    fruit.style.left = `${Math.floor(Math.random() * (container.clientWidth - 200))}px`;
    fruit.style.top = `${Math.floor(Math.random() * (container.clientHeight - 200))}px`;
    fruit.addEventListener("click", () => {
      container.removeChild(fruit);
      score++;
      scoreUp.textContent = score;
    });
    container.appendChild(fruit);
    fruits.push(fruit); 
    // console.log(fruits);
    // console.log(container);

});
}

function restart() {
  clearInterval(interval);
  container.innerHTML = "";
  score = 0;
  scoreUp.textContent = score;
  start();
}

function start() {
    create();
    interval = setInterval(() => {
        decrement();
        create();
        if (score < -2) {
            alert('Lost the game');
            container.innerHTML="Game Over!! Restart Again"
            clearInterval(interval);
        }
    }, 10000);
}


function decrement() {
  fruits.forEach((fruit) => {
    if (container.contains(fruit)) {
      container.removeChild(fruit);
      score--;
      scoreUp.textContent = score;
    }
  });
}

window.onload = start;

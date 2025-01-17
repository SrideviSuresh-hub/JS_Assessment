
let score=0;
let missed=0
const container = document.getElementById("img-container");
const scoreUp=document.getElementById('score');
const missedup=document.getElementById('misssed');
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
let fruits=[];
function create(){
    container.innerHTML="";
    fruits=[];
    imageArray.forEach((image,i) => {
        const fruit = document.createElement("img");
        fruit.src = image;
        fruit.classList.add("images");
        fruit.classList.add("animate");
        fruit.style.left=`${Math.floor(Math.random()*(container.clientWidth-200))}px`;
        fruit.style.top=`${Math.floor(Math.random()*(container.clientHeight-200))}px`;
        // fruit.style.transform=`rotate(${Math.random()*150}deg)`;
        // fruit.style.transition=`transform .2s ease, top .2s ease, left .2s ease`;
          fruit.addEventListener('click',()=>{
                 container.removeChild(fruit);
                 score++;
                 scoreUp.textContent=score; 
                 missedup.textContent=missed; 
            });
        container.appendChild(fruit);
        setTimeout(()=> img.classList.add("animate"), i*500)
        fruits.push(fruit);
      });
       
}

function restart(){
    clearInterval(interval);
    container.innerHTML="";
    score=0;
    missed=0;
    missedup.textContent=missed; 
    scoreUp.textContent=score; 
    start();
}

function start(){
    create();
    interval=setInterval(()=>{
        decrement();
        create();
        // missedup.textContent=missed; 
        if(missed>=3){
            alert("Loss The Game");
            container.innerHTML="GameOver!!,, Restart Again"
            clearInterval(interval)
        }
    },10000);
}

function decrement(){
        fruits.forEach(fruit=>{
            if(container.contains(fruit)){
                container.removeChild(fruit);
                missed++;
                missedup.textContent=missed; 
            }
        });
      }
     
     
window.onload=start();








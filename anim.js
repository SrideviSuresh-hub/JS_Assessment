
const square=document.getElementById('square');


function animate(){
const screenWidth=window.innerWidth;
const screenHeight=window.innerHeight;
let randomX=Math.floor(Math.random()*(screenWidth-square.offsetWidth));
let randomY=Math.floor(Math.random()*(screenHeight-square.offsetHeight-100));
let r=Math.random()*255;
let g=Math.random()*255;
let b=Math.random()*255;

console.log(screenWidth);
console.log(screenHeight);
console.log(randomX);
console.log(randomY);

square.style.left=`${randomX}px`;
square.style.top=`${randomY}px`;
square.style.backgroundColor=`rgb(${r},${g},${b})`;
square.style.transform=`rotate(${Math.random()*0}deg)`;
square.style.transition=`transform ${Math.random()}s ease, top 2s ease, left ${Math.random()}s ease`;

}
square.addEventListener('click',animate)

setInterval(()=>{
    square.style.transform=`rotate(360deg)`;
},500)











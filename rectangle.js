const body=document.getElementById('body');

const rectHieght=200;
const rectWidth=Math.floor(window.innerWidth*75/100);
const leftwidth=(window.innerWidth-rectWidth)/2;
const tophieght=(window.innerHeight-rectHieght)/2;

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(rectWidth);
// console.log(leftwidth);
// console.log(tophieght);
createRectangle(leftwidth,tophieght,rectWidth,rectHieght);

function createRectangle(x,y,width,hieght)
{
    const div=document.createElement('div');
    div.classList.add('rectangle');
    div.style.width=`${width}px`;
    div.style.height=`${hieght}px`;
    div.style.left=`${x}px`;
    div.style.top=`${y}px`;
    div.addEventListener('click', (event) => {
        if(width>10){
        const mouseX =  event.offsetX;
        // console.log(`Mouse position in box: (${mouseX}, ${mouseY},${div.offsetHeight},${div.offsetWidth})`);
        div.remove();
        createRectangle(x,y,mouseX-2,hieght);
        createRectangle(x+mouseX,y,width-mouseX,hieght);
   }
    });

    
    body.appendChild(div);
}







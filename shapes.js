

// document.getElementById('circle').addEventListener('click',()=>{
//     appendShapes('circle');
// });
// document.getElementById('square').addEventListener('click',()=>{
//     appendShapes('square');
// });
// document.getElementById('triangle').addEventListener('click',()=>{
//     appendShapes('triangle');
// });

// let num=parseInt(document.getElementById('numInput').value);

// console.log(parseInt(document.getElementById('shapeCount').value));
console.log(container)


function appendShapes(class_name){
    const container=document.getElementById('container');
    // console.log(parseInt(document.getElementById('shapeCount').value));
    const count = parseInt(document.getElementById('shapeCount').value);

    for(let i=0;i<count;i++)
    {
        const div=document.createElement('div');
        div.className=class_name;
        container.appendChild(div);
    }

// let scroll = this.scrollY;
// window.addEventListener("scroll", (event) => {
//     console.log(scroll)
// })

// if(scroll>0){
//     const cir=document.getElementById('circle');
//     const squ=document.getElementById('square');
//     cir.style.height=`${200-100}px`;
//     cir.style.width=`${200-100}px`;
//     squ.style.height=`${200-100}px`;
//     squ.style.width=`${200-100}px`;
// }
let size=200;

console.log(container.scrollHeight);
 if (container.scrollHeight > 628 ) {
    console.log(container.scrollHeight);
    console.log(container.offsetHeight);
    console.log(container.scrollWidth);
    console.log(container.offsetHeight);
    
        size = Math.max(50, size - 100);
        let shapes = document.querySelectorAll(`.${class_name}`);
        shapes=Array.from(shapes)
        shapes.forEach(shape => {
            if(shape.className=='triangle'){
                shape.style.borderLeft=`${100-50}px solid transparent`;
                shape.style.borderRight=`${100-50}px solid transparent`;
                shape.style.borderBottom=`${size}px solid blue`;
            }else{
            shape.style.width = size + 'px';
            shape.style.height = size + 'px';
            }
        });
    }
}
    
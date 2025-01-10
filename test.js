document.getElementById('submitBtn').addEventListener('click', function() {
    createInputDivs(parseInt(document.getElementById('numInput').value));
});

document.getElementById('finalSubmitBtn').addEventListener('click', function() {
    processSelectedDivs();
});


function createInputDivs(num) {
    const container = document.getElementById('container');
    container.innerHTML = '';


    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('block');
        div.textContent = i + 1;
        div.addEventListener('click', function() {
            div.classList.toggle('selected');
        });
        container.appendChild(div);
    }

    document.getElementById('numInput').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('finalSubmitBtn').style.display = 'block';
}

function processSelectedDivs() {
    const selectedBlocks = document.querySelectorAll('.block.selected');
    const container = document.getElementById('container');
    container.innerHTML = '';


    const textContents=[];
    selectedBlocks.forEach((block)=>{
        textContents.push(block.textContent);
    });
    textContents.forEach((text)=>{
        const div=document.createElement('div');
        div.classList.add('block');
        div.textContent=text;
        div.addEventListener('click',()=>{
            div.classList.toggle('selected');
        })
        container.appendChild(div)
    })

    if (selectedBlocks.length === 1) {
        document.getElementById('finalSubmitBtn').style.display = 'none';
    } 
}



const parent = document.querySelector(".main");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");

const reset = document.querySelector(".reset");

parent.addEventListener('click', (e)=> {
    const child = e.target;
    const body = document.querySelector("body");
    body.style.backgroundColor = child.classList[1];
})

reset.addEventListener('click', ()=> {
    const body = document.querySelector("body");
    body.style.backgroundColor = "black";
})
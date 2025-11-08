const body = document.querySelector("body");

body.addEventListener("click", (e)=> {
    console.log(e.clientX, e.clientY);

    const circle = document.createElement('div');
    circle.classList.add("circle");
    

    const color = ['red', 'blue', 'orange', 'green', 'pink', 'purple'];

    const rann = Math.floor(Math.random()*6);
    circle.style.backgroundColor = color[rann];
    circle.textContent = color[rann];

    circle.style.left = `${e.clientX-25}px`;
    circle.style.top = `${e.clientY-25}px`;

    body.append(circle);

    setTimeout(()=> {
        circle.remove();
    }, 5000);
})


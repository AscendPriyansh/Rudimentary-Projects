const store = document.querySelector(".time");

setInterval(()=>{
    let time = new Date();
    store.textContent = time.toLocaleTimeString();
},999);

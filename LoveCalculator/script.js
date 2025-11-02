const form = document.querySelector(".form");

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const boy = document.querySelector("#boy");
    const girl = document.querySelector("#girl");

    const L1 = boy.value.length;
    const L2 = girl.value.length;

    const sum = L1+L2;
    const cube = sum**3;
    const mod = cube%101;
    const ans = 100-mod;

    document.querySelector(".result").textContent = `Result ${ans}%`;
    form.reset();
})
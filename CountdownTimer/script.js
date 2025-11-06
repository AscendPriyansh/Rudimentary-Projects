setInterval(() => {
    const result = document.querySelector(".result");
    const time = Date.now();
    const countdown = new Date(2026, 1, 11).getTime();
    let timer = countdown - time;

    const day = Math.floor((timer) / (1000 * 60 * 60 * 24));
    timer %= 1000 * 60 * 60 * 24;
    const hour = Math.floor((timer) / (1000 * 60 * 60));
    timer %= 1000 * 60 * 60;
    const min = Math.floor((timer) / (1000 * 60));
    timer %= 1000 * 60;
    const sec = Math.floor((timer) / (1000));
    timer %= 1000;

    result.textContent = `Days:${day} || Hour:${hour} || Min:${min} || Sec:${sec}`;
}, 999);


const form = document.querySelector(".form");

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const income = document.querySelector(".input");
    const amount = parseInt(income.value);

    const result = document.querySelector(".result");

    let totalTax=0;

    if(amount<=400000 && amount>=0) {
        totalTax=0;
        result.textContent = `You have to pay - ${totalTax}`;
        return;
    }
    else if(amount>400000 && amount<=600000) {
        totalTax=((amount-400000)*5)/100;
    }
    else if(amount>600000 && amount<=800000) {
        totalTax=((amount-600000)*10)/100+(400000*5)/100;
    }
    else if(amount>800000 && amount<=1200000) {
        totalTax=((amount-800000)*15)/100+(800000*10)/100+(400000*5)/100;
    }
    else if(amount>1200000 && amount<=1500000) {
        totalTax=((amount-1200000)*20)/100+(1200000*15)/100+(800000*10)/100+(400000*5)/100;
    }
    else if(amount>1500000 && amount<=1800000) {
        totalTax=((amount-1500000)*25)/100+(1500000*20)/100+(1200000*15)/100+(800000*10)/100+(400000*5)/100;
    }
    else {
        totalTax=((amount-1800000)*30)/100+(1800000*25)/100+(1500000*20)/100+(1200000*15)/100+(800000*10)/100+(400000*5)/100;
    }

    result.textContent = `You have to pay - ${totalTax} Ghar jaenga isme`;
    e.reset();
});
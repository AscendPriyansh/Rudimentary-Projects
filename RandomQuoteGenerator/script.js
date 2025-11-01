const quotes = ["If you don’t take risks, you can’t create a future! —Monkey D. Luffy", "Forgetting is like a wound. The wound may heal, but it has already left a scar. —Monkey D. Luffy", "If you win, you live. If you lose, you die. If you don’t fight, you can’t win. —Eren Yaeger", "If you don’t share someone’s pain, you can never understand them. —Nagato", "People become stronger because they have memories they can’t forget. —Tsunade", "Love is not necessary; power is the only true necessity. — Madara Uchiha", "A dropout will beat a genius through hard work. —Rock Lee", "A place where someone still thinks about you is a place you can call home. —Jiraiya", "It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it. —Might Guy", "If you really want to be strong… Stop caring about what your surrounding thinks of you! —Saitama"];    

console.log(quotes.length);

const btn = document.querySelector(".gen-btn");
const quote = document.querySelector(".heading");

btn.addEventListener('click', ()=> {
    const index = Math.floor(Math.random()*10);

    quote.textContent = quotes[index];
})
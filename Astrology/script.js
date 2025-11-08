const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

const compliments = [
  "Your energy lights up every room you enter.",
  "You have a calm presence that makes everyone feel safe.",
  "Your words can turn ordinary moments into magic.",
  "You care so deeply it makes people feel truly seen.",
  "You shine so effortlessly that others can’t help but admire you.",
  "Your attention to detail makes the world a little more perfect.",
  "You bring harmony and beauty wherever you go.",
  "Your intensity makes every connection unforgettable.",
  "Your adventurous spirit inspires people to dream bigger.",
  "Your discipline and ambition command quiet respect.",
  "You think in galaxies while others see only stars.",
  "Your empathy could heal a thousand hearts.",
  "You never back down, and that fearlessness is rare.",
  "You remind everyone what loyalty truly means.",
  "Conversations with you feel like fireworks.",
  "Your confidence makes others believe in themselves too.",
  "You make improvement look like an art form.",
  "Your sense of style and grace is unmatched.",
  "You love with depth that others can only imagine.",
  "Your laughter feels like freedom itself."
];

const victimCardCompliments = [
  "You care too much, and that’s why you always end up hurt.",
  "You give your all to people who only notice when you’re gone.",
  "Your silence has protected people who never defended you.",
  "You love deeply, but not everyone deserves that kind of love.",
  "You see the good in everyone, even when they show you their worst.",
  "You forgive too easily, and that’s your biggest strength and weakness.",
  "You’ve been through a lot, but you still manage to smile — that’s power.",
  "People think you’ve changed, but you just stopped tolerating nonsense.",
  "You’re not cold — you just learned who’s worth your warmth.",
  "You’ve carried pain that others would have crumbled under.",
  "You don’t ask for much, just genuine effort — but that’s rare.",
  "You always try to fix people who broke you in the first place.",
  "You’re not distant; you’re protecting your peace.",
  "You’ve mastered the art of pretending you’re fine.",
  "You’re not dramatic — you just feel things deeply.",
  "You never get the same energy you give, and yet you keep giving.",
  "You’ve outgrown people who still think they know the old you.",
  "You heal others, but no one notices when you’re bleeding.",
  "You deserve the same love you give so freely.",
  "You’ve been the strong one for too long — it’s okay to rest."
];

const astroRecommendations = [
  "Focus on self-care today — your energy needs recharging.",
  "An unexpected opportunity may appear; trust your instincts.",
  "Someone from your past might reach out — listen, but protect your peace.",
  "Your creativity is at its peak — channel it into something meaningful.",
  "Don’t rush decisions today; clarity will come with patience.",
  "It’s a good time to let go of grudges and start fresh.",
  "Balance your emotions before making financial choices.",
  "Romance may surprise you when you least expect it.",
  "Your determination will pay off — stay consistent.",
  "Take time to organize your thoughts before speaking your truth.",
  "A small act of kindness today could bring big rewards later.",
  "You might feel nostalgic — use that energy to reflect, not regret.",
  "Avoid unnecessary conflicts; silence will speak louder today.",
  "This is a powerful day for setting intentions and manifesting goals.",
  "Your confidence attracts new opportunities — don’t downplay it.",
  "Listen to your body — it’s telling you what you need to slow down.",
  "You may feel a shift in priorities; embrace the change.",
  "It’s a lucky day for trying something new and bold.",
  "Be honest with yourself — clarity starts within.",
  "Spend time in nature to realign your thoughts and emotions."
];

const futurePredictions = [
  "A new chapter is about to unfold — stay patient, the universe is aligning in your favor.",
  "Your energy will soon attract opportunities you’ve been waiting for.",
  "In the coming weeks, you’ll meet someone who will change your perspective on life.",
  "Financial stability is on the horizon — keep your focus strong.",
  "The next month will bring clarity about a decision that’s been confusing you.",
  "A hidden talent will soon be noticed by the right people.",
  "Your career path is about to shift — trust the process.",
  "A message from your past may return to guide your future.",
  "Unexpected travel may lead to a breakthrough or new beginning.",
  "An emotional healing phase will open doors to self-growth and peace.",
  "The stars show that love will find you when you least expect it.",
  "Your creative side will shine soon — embrace bold ideas.",
  "You’re entering a cycle of manifestation — your thoughts will shape reality.",
  "The next few months bring transformation and self-discovery.",
  "Someone who once doubted you will soon admire your success.",
  "A big decision awaits — follow intuition over fear.",
  "The universe is preparing to reward your patience.",
  "An unexpected opportunity will test your courage — take it.",
  "You’ll soon outgrow people or places that no longer align with your energy.",
  "Destiny is shifting — what feels uncertain now will soon make perfect sense."
];

const form = document.querySelector(".form");

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const result = document.querySelector(".result");

    const size1 = (name.length + surname.length)/10;  
    const text = `Namaskar, ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]} ${compliments[(day-1)%10]} ${victimCardCompliments[month-1]} ${astroRecommendations[year%10]} ${futurePredictions[(year*month)%10]}`;
    result.textContent = text;
    
    form.reset();
});




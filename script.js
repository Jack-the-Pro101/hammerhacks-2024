let index = 0;
let timer;

const quotes = [
    "$19 Fortnite card",
    "Who wants it?",
    "And yes, I'm giving it away.",
    "And remember, share, share, sHAre!",
    "And trolls,",
    "DON'T GET BLOCKED!"
];

const quoteElement = document.querySelector("blockquote");

function changeQuote() {
    quoteElement.innerText = quotes[index];

    index++;
    index %= quotes.length;
}

timer = setInterval(changeQuote, 2000);


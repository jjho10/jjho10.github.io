// Quotes
const quotes = [
    {
        quote: "Time you enjoy wasting is not wasted time.",
        author: "Marthe Troly-Curtin",
    },
    {
        quote: "We must use time as a tool, not as a couch.",
        author: "John F. Kennedy",
    },
    {
        quote: "Time is what we want most but what we use worst.",
        author: "William Penn",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "Someday” is a disease that will take your dreams to the grave with you.",
        author: "Timothy Ferriss",
    },
    {
        quote: "Yesterday’s the past, tomorrow’s the future, but today is a gift. That’s why it’s called the present.",
        author: "Bil Keane",
    },
    {
        quote: "Better three hours too soon than a minute too late.",
        author: "William Shakespeare",
    },
    {
        quote: "The past always looks better than it was. It’s only pleasant because it isn’t here.",
        author: "Finley Peter Dunne",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomQuote(){
    const idx = Math.floor(quotes.length * Math.random());
    quote.innerText = `"${quotes[idx].quote}"`;
    author.innerText = `- ${quotes[idx].author}`;
}

randomQuote()

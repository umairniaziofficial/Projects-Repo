const quoteEl = document.getElementById("quote-text");
const authorEl = document.getElementById("author");
const tagsEl = document.getElementById("tags");

document.getElementById("next").addEventListener("click", GetRandomQuote);
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        GetRandomQuote();
    }
});
async function GetRandomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const quote = await response.json();
    console.log(quote);
    quoteEl.innerHTML = quote.content;
    authorEl.innerHTML = quote.author;
    tagsEl.innerHTML = quote.tags.join(", "); 
    console.log(quote.content);
    console.log(`- ${quote.author}`);
}

GetRandomQuote();

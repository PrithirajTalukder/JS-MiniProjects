


const quote = document.querySelector("#quotetext");
const author = document.querySelector("#author");

async function getQuotes(){

    const quotesUrl = 'https://thequoteshub.com/api/';

   
        const response = await fetch(quotesUrl);
        var apiQuotes = await response.json();
        
        quote.innerHTML = apiQuotes.text;
        author.innerHTML = apiQuotes.author;
        
    



}


function tweet(){
    window.open(href="https://twitter.com/intent/tweet?text=" +  quote.innerHTML + "------by" + author.innerHTML, "tweet window", "height=200", "width=600");
}

getQuotes();


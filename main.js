import { quotes } from './quote.js';

const randomQuote = () =>{
    const randomIndex = Math.floor(Math.random()*quotes.length);
    return quotes[randomIndex];
}

const btnElement = document.querySelector('.new-btn');

btnElement.addEventListener('click', () =>{
    const quoteObject = randomQuote()
    document.querySelector('.quote-text').innerText = `${quoteObject.quote}`

    document.querySelector('.author').innerText = `${quoteObject.person}`
    
});

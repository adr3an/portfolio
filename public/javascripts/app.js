const quoteBtn = document.querySelector('#quoteBtn');
const body = document.querySelector('body');
const quoteBox = document.querySelector('#quote-box');
const quoteAuthor = document.querySelector('#quote-author');
// const btnContainer = document.querySelectorAll('i');

const getQuote = async (number) => {
    const res = await axios.get('https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520');
    return res.data[number].quote;

}
const getAuthor = async (number) => {
    const res = await axios.get('https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520');
    return res.data[number].name;

}

//this function generates random number 
const randomNumber = () => {
    return Math.floor(Math.random() * 99);
}


// this function generates rgb
function random() {
    let r = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

quoteBtn.addEventListener('click', async () => {

    quoteBox.innerText = '';
    quoteAuthor.innerText = '';

    let colour = random();

    let number = randomNumber();
    const quote = document.createElement('p');
    const author = document.createElement('p');

    quote.style.color = colour;
    author.style.color = colour;
    // body.style.backgroundColor = colour;
    // btnContainer[0].style.color = colour;
    // btnContainer[1].style.color = colour;
    quoteBtn.style.backgroundColor = colour;




    quote.innerText = await getQuote(number);
    author.innerText = `- ${await getAuthor(number)}`;

    quoteBox.append(quote);
    quoteAuthor.append(author);
    // quoteBox.style.color = colour;
    // quoteAuthor.style.color = colour;



});
const quote = document.getElementById("quote")
const author = document.getElementById('author')
const nextBtn = document.getElementById('nextBtn')


// random quote function
 async function  randomQuote(){
    quote.innerText = "Loading.."
    author.innerText = "Loading.."
    let quotePromise = await fetch('https://api.quotable.io/quotes/random')
    let data = await quotePromise.json()
    
    quote.innerText = data[0].content
    author.innerText = `—— ${data[0].author}`
}
nextBtn.addEventListener('click',()=>{

    randomQuote()
   

})
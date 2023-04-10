const quoteText = document.querySelector(".quote");
const quoteButton = document.querySelector("button");
const copyButton = document.querySelector(".copy");
const authorName = document.querySelector(".name");

quoteButton.addEventListener("click",()=>{
    let x = Math.floor((Math.random() * 1643) + 1);
    fetch("https://type.fit/api/quotes").then(res=>res.json().then(result=>{
        console.log("hi")
        quoteText.innerHTML = result[x].text
        authorName.innerHTML = result[x].author
    }));
});

copyButton.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerHTML)
})

const url = "https://api.quotable.io/random";

const generate = document.querySelector('#generate');


generate.addEventListener('click', generateQuote);

function generateQuote(){
  
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    
    .then(function(data){ 
  var x = document.getElementById("quote");
    x.innerText =' " ' + data.content + ' " ' ;
    var author =document.querySelector("#author")
    author.innerHTML = "Author:" + " " + data.author;
   })
 .catch(function(err) {
    console.log(error); 
    });
 }


const text = document.getElementById("quote");
const author = document.getElementById("author");


const getNewQuote = async () => {

    var url = "https://type.fit/api/quotes";


    const response = await fetch(url);
    console.log(typeof response);

    const allQuotes = await response.json();


    const indx = Math.floor(Math.random() * allQuotes.length);

    const quote = allQuotes[indx].text;


    const auth = allQuotes[indx].author;

    if (auth == null) {
        author = "Anonymous";
    }


    text.innerHTML = quote;
    author.innerHTML = " ~ " + auth;



}

getNewQuote(); 

var myDate = new Date();
var hrs = myDate.getHours();

var day;

if (hrs < 12)
    day = 'Morning';
else if (hrs >= 12 && hrs <= 17)
    day = 'Afternoon';
else if (hrs >= 17 && hrs <= 24)
    day = 'Evening';

document.getElementById('Greeting').innerHTML = "Let's start our </b>" +
    '<b>' + day + '</b> to new Quote!';
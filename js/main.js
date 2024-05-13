var quotes = [
    { quote: "“Be yourself; everyone else is already taken.”", quoteWriter: "--Oscar Wilde" },
    { quote: "“So many books, so little time.”", quoteWriter: "--Frank Zappa" },
    { quote: "“A room without books is like a body without a soul.”", quoteWriter: "--Marcus Tullius Cicero" },
    { quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", quoteWriter: "--Bernard M. Baruch" },
    { quote: "“You only live once, but if you do it right, once is enough.”", quoteWriter: "--Mae West" },
    { quote: "“Be the change that you wish to see in the world.”", quoteWriter: "--Mahatma Gandhi" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.”", quoteWriter: "--Robert Frost" },
    { quote: "“If you tell the truth, you don't have to remember anything.”", quoteWriter: "--Mark Twain" },
    { quote: "“A friend is someone who knows all about you and still loves you.”", quoteWriter: "--Elbert Hubbard" },
];

// ⬇⬇⬇⬇⬇ There is a problem     .⬇⬇⬇⬇⬇

function generateQuote() {
    var num = Math.floor(Math.random() * quotes.length);
    var { quote, quoteWriter } = quotes[num];
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('quoteWriter').innerHTML =  quoteWriter;
}

generateQuote();

// ⬇⬇⬇⬇⬇ Application to Solve the problem of generating the same number ⬇⬇⬇⬇⬇

// var lastNum = 0;

// function generateQuote() {
//     var num;
//     do {
//         num = Math.floor(Math.random() * quotes.length);
//     } while (num === lastNum); 
//     lastNum = num; 

//     var { quote, quoteWriter } = quotes[num];
//     document.getElementById('quote').innerHTML = quote;
//     document.getElementById('quoteWriter').innerHTML =  quoteWriter;
// }

// generateQuote();



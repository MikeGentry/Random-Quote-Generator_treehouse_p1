// Array holding the quote objects
var quotes = [
    {
      quote: 'Do. Or Do Not. There is no Try.',
      source: 'Yoda',
      citation: "The Empire Strikes Back",
      year: "1980"
    },
    {
      quote: 'Go ahead, make my day.',
      source: 'Dirty Harry',
      citation: "",
      year: ""
    },
    {
      quote: 'Leave the gun. Take the cannoli.',
      source: 'The Godfather',
      citation: "",
      year: ""
    },
    {
      quote: 'If you tell the truth, you don\'t have to remember anything',
      source: 'Mark Twain',
      citation: "",
      year: ""
    }
];

var random = 0;
var previousNumber = 0;

// Print function
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
};

// Function to randomly select an element of the array based on the length of the array.
function getRandomQuote() {
  // while loop to not repeat the same quote twice in a row.
  while (previousNumber === random) {
  random = Math.floor(Math.random() * quotes.length);
  };
  previousNumber = random;
  return random;
};

// Function to to print out the random quote to the page.
function printQuote() {
  var randomQuote = quotes[getRandomQuote()];
  message = '';
  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
    // Conditional to print the option "citation" and "year" properties if present.
    if (randomQuote.citation !== "") {
      message += '<span class="citation">' + randomQuote.citation + '</span>';
    };
    if (randomQuote.year !== "") {
      message += '<span class="year">' + randomQuote.year + '</span>';
    };
  message += '</p>';
  console.log(message);
  print(message);
};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// Event listener to display random quote when page initially loads.
window.addEventListener("load", printQuote);

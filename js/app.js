// // The problems.....
// 1. printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
function printGreeting(name = "John Doe") {
    return `Hello there, ${name}!`;
}
console.log(printGreeting());
console.log(printGreeting("Jim"));

// 2. reverseWordOrder
// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"

function reverseWordOrder(words) {
    let wordArray = words.split(" ");
    let reversedWordArray = wordArray.reverse();
    return reversedWordArray.join(" ");
}
console.log(reverseWordOrder("Jimmy John's tastes good"));
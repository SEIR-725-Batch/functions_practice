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

// 3. calculate
// Write a function called calculate.
// This function should take three arguments: two numbers and a string.
// Name the parameters num1, num2, and operation.
// If if the function is called with the third argument as "add", it should return the sum of num1 and num2.
// If if the function is called with the third argument as "sub", it should return return num1 minus num2.
// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
//
// console.log(calculate(4, 3, "sub"));
// => 1
// console.log(calculate(4, 3, "exp"));
// => 64
function calculate(num1, num2, operation) {
    switch(operation) {
        case "add":
            return num1 + num2;
        case "sub":
            return num1 - num2;
        case "mult":
            return num1 * num2;
        case "div":
            return num1 / num2;
        case "exp":
            return num1 ^ num2;
        default:
            return "ERROR: Expected one of these operations as string in third parameter: add, sub, mult, div, exp";
    }
}
console.log(calculate(1,5,"e"));
// 4. pandigital numbers
// Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with "weird" questions and you'll need to be very careful when reading these types of questions to make sure you understand what you're being asked to do.
// A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.
// The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
// The number 333 is not 1-to-n pandigital.
// The number 0 is not 1-to-n pandigital.
// The number 987654321 is 1-to-n pandigital.
// Write a function that checks if a number is 1-to-n pandigital.

// SELF: the length of the number must be equal to the highest number and use from 1 to that number. The highest possible number is 987654321 and the lowest possible number is 1.
function checkPandigital(num) {
    // get the length of the number by parsing it as a string
    let numString = num.toString();
    console.log("The numString is",numString);
    let numLength = numString.length;
    // parse the string into an array, change strings to ints, then sort
    let numArray = numString.split("");
    console.log("The numArray is",numArray);
    let numIntArray = [];
    for (let i = 0; i < numArray.length; i++) {
        numIntArray.push(parseInt(numArray[i]));
    }
    console.log("The numIntArray is",numIntArray);
    let numArraySorted = numIntArray.sort();
    console.log("The numArraySorted is",numArraySorted,"and its type is",typeof(numArraySorted));
    // generate an array of what the ideal pandigital number would contain
    let numPanIdeal = [];
    for (let i = 1; i <= numLength; i++) {
        numPanIdeal.push(i);
    }
    console.log("The numPanIdeal is ",numPanIdeal,"and its type is",typeof(numPanIdeal));
    // check if the actual array matches the ideal array
    if (numArraySorted.length === numPanIdeal.length && numArraySorted.every((val, index) => val === numPanIdeal[index])) {
        return true;
    } else {
        return false;
    }
}
//expected return is true for both
console.log(checkPandigital(1234));
console.log(checkPandigital(54321));
// 5. printGreeting v2.0
// There is a very rudimentary JavaScript function for receiving user input called prompt().
// Usage:
// 	const userInput = prompt("Please enter some input");
// userInput is now whatever the user entered.
// There is another rudimentary JavaScript function for displaying text called alert(). You probably have heard of it. It takes a string as a parameter. Read about it on mdn.
// Let's revisit printGreeting.
// First get the userInput as above. Then write a function called printGreeting2 with a parameter name that returns a greeting with the argument interpolated into the greeting as before, but this time use the alert function to display the greeting to the user.
// Hungry for more?
const userInput = prompt("Please enter some input");
function printGreeting2(name) {
    alert(`Hello there ${name}`);
}
console.log(printGreeting2(userInput));

// 6. Functions + loops: a special partnership
// Write a function that, when called ("call" = "invoke") creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space (a "white square") or a # character (representing a black square). Hence, the characters should form a chessboard.

// Calling your function should print something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// 7. Modify it to make any size grid.
// When you have a function that generates this pattern, modify it to take a parameter size. Make the function work for any size, outputting a properly formatted grid of the given width and height. If it helps you to have this set. The very first square should always be white.

// Remember to give it a nice semantic name

// This problem was adapted from one in Eloquent Javascript so hopefully you've already seen it because you've been reading Eloquent Javascript. If you haven't yet, read the first 3 chapters (this reads great on a phone, and if you take transit, this is a great thing to read on the train/bus on your way in). Homework will be assigned soon.

// 8. Variable number of arguments
// Modify calculate above so that it continues to work as specified in question 3, but also lets a user get the square root of a number by specifying only 2 parameters: the number they want the square root of as the first parameter, and "sqrt" as the second parameter.

// Click "Details" below for a hint:

// Details
// Hint: use `typeof`
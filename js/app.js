//Problem 1
function printGreeting(name) {
    return(`Hello, there ${name}.`);
}
//console.log(printGreeting('Bob'));

//Problem 2
function reverseWordOrder(str) {
    let words = [];
    words = str.split(" ");
    return words.reverse(" ").join(" ")
}

//console.log(reverseWordOrder('what is happening here'))
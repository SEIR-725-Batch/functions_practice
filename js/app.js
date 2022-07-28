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

//Problem 3
function calculate(num1, num2, operation) {
    if (operation === "add") return num1 + num2;
    else if (operation === "sub") return num1 - num2;
    else if (operation === "mult") return num1 * num2;
    else if (operation === "div") return num1 / num2;
    else if (operation === "exp") return num1 ** num2;
}
//console.log(calculate(4, 3, "exp"))
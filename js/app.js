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

//Problem 4
function checkPandigital(num) {
   num = String(num).split('').sort(function(a, b){return a - b});
   for (i=0; i<num.length; i++) {
    if (i == num[i]) {
        return true;
    } else if (i + 1 == num[i]) {
        return true;
    } else {
        return false
    }
        
    }
   }



//console.log(checkPandigital(7531642))

//Problem 5
const userInput = prompt("Please enter your name");
function printGreeting2(name) {
    name = userInput;
    alert(`Hello, there ${name}.`);
}
//console.log(printGreeting2())
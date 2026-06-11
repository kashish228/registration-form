function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    let result;

    if (b == 0) {
        result = "error: cannot divide by zero";
    } else {
        result = a / b;
    }

    return result;
}

// values
let num1 = 20;
let num2 = 10;

console.log("Addition: " + add(num1, num2));
console.log("Subtraction: " + sub(num1, num2));
console.log("Multiplication: " + mul(num1, num2));
console.log("Division: " + div(num1, num2));
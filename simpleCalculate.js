const sum = function (num1, num2) {
    return num1 + num2
}

const sub = function (num1, num2) {
    return num1 - num2
}

const mul = function (num1, num2) {
    return num1 * num2
}

const dev = function (num1, num2) {
    return num1 / num2
}

const operations = {
    "+": sum,
    "-": sub,
    "*": mul,
    "/": dev,
}

const simpleCalculate = function (num1, num2, operation) {
    return operation(num1, num2)
}

console.log(simpleCalculate(6, 3, operations["-"]))




var num1 = prompt ("Enter Number");
var operator = prompt("Pick + - * /")
var num2 = prompt("Enter number");



if (operator == "+") {
  const add = (num1 + num2)
  console.log(add);
}

if (operator == "-") {
  const subtract = (num1 - num2)
  console.log(subtract);
}

if (operator == "*") {
  const multiply = (num1 * num2)
  console.log(multiply);
}

if (operator == "/") {
  const divide = (num1 / num2)
  console.log(divide);
}


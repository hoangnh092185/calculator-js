// Calculator.prototype.calculator =
// function calculator(number1, number2, operator){
//   var result;
//   if(operator === 'Add'){
//     return result = number1 + number2;
//   }else if(operator === 'Subtract'){
//     return result = number1 - number2;
//   }else if(operator === 'Multiply'){
//     return result = number1 * number2;
//   }else {
//     return result = number1 / number2;
//   };
// };


Calculator.prototype.add = function(num1, num2){
  var output = num1 + num2;
  return output;
};

Calculator.prototype.subtract = function(num1, num2){
  var output = num1 - num2;
  return output;
};
Calculator.prototype.multiply = function(num1, num2){
  var output = num1 * num2;
  return output;
};
Calculator.prototype.divide = function(num1, num2){
  var output = num1/num2;
  return output;
};

exports.calculatorModule = Calculator;

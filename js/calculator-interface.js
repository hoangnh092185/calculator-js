var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function(){
  $('#calculator-form').submit(function(event){
    event.preventDefault();
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    var operator = $('#operator').val();
    var result;

    var simpleCalculator = new Calculator("hot pink");
    if (operator === "add"){
      result= simpleCalculator.add(number1,number2);
    } else if (operator ==="subtract"){
      result= simpleCalculator.subtract(number1,number2);
    } else if (operator === "multiply"){
      result = simpleCalculator.multiply(number1,number2);
    } else if (operator ==="divide"){
      result = simpleCalculator.divide(number1,number2);
    }
    $("#solution").text(result);
  });
});

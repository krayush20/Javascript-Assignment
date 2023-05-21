function calculator(operator, num1, num2) {
    let result;
    
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
    
    console.log("Result:", result);
}
  
// Example usage
calculator("+", 5, 3); 
calculator("-", 10, 7);
calculator("*", 4, 6); 
calculator("/", 20, 5); 
  
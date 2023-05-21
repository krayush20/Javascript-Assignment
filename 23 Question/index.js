function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Usage example
  const userInput = parseInt(prompt("Enter a number:"));
  
  if (isPrime(userInput)) {
    console.log(`${userInput} is a prime number.`);
  } else {
    console.log(`${userInput} is not a prime number.`);
  }
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Loop through numbers from 1 to 100
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0 && isPrime(i)) {
      console.log(i);
    }
  }
  function
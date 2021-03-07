function sumPrimes(num) {
    const primes = [];
    for (let i = 2; i <= num; i++) {
      let prime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) prime = false;
      }
      if (prime) primes.push(i);
    }
    return primes.reduce((a, b) => a + b);
  }
  
  sumPrimes(10);
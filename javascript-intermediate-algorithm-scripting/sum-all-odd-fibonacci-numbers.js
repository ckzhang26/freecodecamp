function sumFibs(num) {
    const fibs = [1];
    for (let i = 1; i <= num; i += fibs[fibs.length - 2]) {
      fibs.push(i);
    }
    return fibs.filter(num => num % 2 === 1).reduce((a, b) => a + b);
  }
  
  sumFibs(4);
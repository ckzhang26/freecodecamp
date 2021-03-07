function sumAll(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = Array.from( Array(max - min + 1), (val, index) => index + min);
    console.log(range);
  
    return range.reduce((a, b) => a + b);
  }
  
  sumAll([1, 4]);
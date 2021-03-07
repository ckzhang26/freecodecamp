function uniteUnique(arr) {
    const args = [...arguments];
    const results = [];
  
    for (let array of args) {
      for (let number of array) {
        if (!results.includes(number)) results.push(number);
      }
    }
  
    return results;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
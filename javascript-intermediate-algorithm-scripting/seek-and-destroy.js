function destroyer(arr) {
    const results = [];
    const removeVals = [...arguments].slice(1);
    for (let element of arr) {
      if (!removeVals.includes(element)) results.push(element);
    }
    
    return results;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
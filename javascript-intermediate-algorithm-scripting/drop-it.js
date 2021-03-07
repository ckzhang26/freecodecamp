function dropElements(arr, func) {
    const index = arr.findIndex(e => func(e));
    return index > -1 ? arr.slice(index) : [];
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
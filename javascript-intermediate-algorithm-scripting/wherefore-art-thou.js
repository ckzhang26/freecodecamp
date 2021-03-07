function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
  
    for (let obj of collection) {
      let hasKeys = true;
      for (let key in source) {
        if (obj[key] !== source[key]) hasKeys = false;
      }
      if (hasKeys) arr.push(obj);
    }
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
function steamrollArray(arr) {
    return arr.reduce((acc, val) => {
      return acc.concat(Array.isArray(val) ? steamrollArray(val) : val)
    }, []);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
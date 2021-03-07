function smallestCommons(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = Array.from(Array(max - min + 1), (val, index) => index + min);
    const results = [...range];
  
    // increase smallest number in range by that (original) number
    // until all numbers are equal
    // ex: 1, 2, 3 => 2, 2, 3 => 3, 2, 3 => 3, 4, 3 => 4, 4, 3 =>
    // 4, 4, 6 => 5, 4, 6 => 5, 6, 6 => 6, 6, 6 => 6 is lcm 
    // following https://en.wikipedia.org/wiki/Least_common_multiple#Using_a_simple_algorithm
  
    while (!results.every(num => num === results[0])) {
      const minIndex = results
                      .findIndex(element => element === Math.min(...results));
      results[minIndex] += range[minIndex];
    }
    return results[0];
  }
  
  smallestCommons([1,5]);
  
  
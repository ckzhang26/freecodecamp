function diffArray(arr1, arr2) {
    const notInArr1 = arr2.filter(e => !arr1.includes(e));
    const notInArr2 = arr1.filter(e => !arr2.includes(e));
    return [...notInArr1, ...notInArr2];
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
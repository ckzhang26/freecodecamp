function palindrome(str) {
    const newStr = str.replace(/\W|_/g, '').toLowerCase();
    return newStr.split('').reverse().join('') === newStr;
  }
  
  palindrome("eye");
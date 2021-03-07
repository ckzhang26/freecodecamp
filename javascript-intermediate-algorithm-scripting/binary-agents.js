function binaryAgent(str) {
    const decimalStrArray =  
        str
        .split(' ')
        // map each binary string to its decimal number equivalent
        .map(binStr => {
            // map each binary digit of binary string to decimal number
            // then sum to get decimal number for binary string
            return binStr
                  .split('')
                  .map((binDgt, index) => {
                  // to convert binary digit to decimal number, 
                  // multiply binary digit by 2 raised to the digits place.
                  // digits place is the digit's index
                  // from the end (right) of string
  
                      return +binDgt * Math.pow(2, binStr.length - 1 - index)
                  })
                  .reduce((a, b) => a + b);
        });
    // each decimal number will equal a character code unit
    return String.fromCharCode(...decimalStrArray);
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
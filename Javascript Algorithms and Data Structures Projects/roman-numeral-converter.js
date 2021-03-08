function convertToRoman(num) {
    const numStr = num.toString();
    const numLength = numStr.length;
    // map each digit to its roman numeral letters
    return numStr.split('').map((num, i) => {
        num = +num;
        // a digit's place value is its index from the end (right) of number
        switch (numLength - 1 - i) {

            // ones digit
            case 0:
                if (num === 9) {
                    return 'IX';
                }
                if (num >= 5) {
                    return 'V' + 'I'.repeat(num % 5);
                }
                if (num === 4) {
                    return 'IV';
                }
                else return 'I'.repeat(num);

            // tens digit
            case 1:
                if (num === 9) {
                    return 'XC';
                }
                if (num >= 5) {
                    return 'L' + 'X'.repeat(num % 5);
                }
                if (num === 4) {
                    return 'XL';
                }
                else return 'X'.repeat(num);

            // hundreds digit
            case 2: 
                if (num === 9) {
                    return 'CM';
                }
                if (num >= 5) {
                    return 'D' + 'C'.repeat(num % 5);
                }
                if (num === 4) {
                    return 'CD';
                }
                else return 'C'.repeat(num);

            // thousands digit
            case 3: 
                return 'M'.repeat(num);
        }
    }).join('');
}

convertToRoman(36);
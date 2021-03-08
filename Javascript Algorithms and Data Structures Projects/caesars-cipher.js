function rot13(str) {

    return str
          .split('')
          .map((char, i) => {
            const charCode = str.charCodeAt(i);
            return charCode > 64 ?
                      charCode < 78 ? 
                      String.fromCharCode(charCode + 13) 
                      : String.fromCharCode(charCode - 13)
                  : char            
          })
          .join('');
  
    // const results = [];
    // for (let i = 0; i < str.length; i++) {
    //   const charCode = str.charCodeAt(i);
    //   if (charCode > 64 && charCode < 78) {
    //     results.push(String.fromCharCode(charCode + 13));
    //   }
    //   else if (charCode >= 78 && charCode < 91) {
    //     results.push(String.fromCharCode(charCode - 13));
    //   }
    //   else results.push(str[i]);
    // }
    // return results.join('');
  }
  
  rot13("SERR PBQR PNZC");
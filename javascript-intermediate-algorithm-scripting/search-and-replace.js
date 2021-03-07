function myReplace(str, before, after) {
    const replace = before.charCodeAt(0) < 91 ? 
                    after[0].toUpperCase() + after.slice(1)
                    : after[0].toLowerCase() + after.slice(1);
                    
    return str.replace(before, replace);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
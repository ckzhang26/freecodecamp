function pairElement(str) {
    const BASE_PAIRS = {
      'A' : 'T',
      'T' : 'A',
      'G' : 'C',
      'C' : 'G'
    }
  
    return str.split('').map(char => [char, BASE_PAIRS[char]]);
  }
  
  pairElement("GCG");
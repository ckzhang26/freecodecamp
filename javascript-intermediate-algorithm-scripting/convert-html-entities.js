function convertHTML(str) {
    const HTML_ENTITIES = {
      '&' : 'amp',
      '>' : 'gt',
      '<' : 'lt',
      '"' : 'quot',
      '\'' : 'apos'
    }
  
    return str
          .split('')
          .map(char => {
            return HTML_ENTITIES[char] ? `&${HTML_ENTITIES[char]};` : char;
          })
          .join('');
  }
  
  convertHTML("Dolce & Gabbana");
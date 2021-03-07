function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(str[0])) return str + 'way';
    const consonantStart = str.match(/^[^aeiou]+/);
    return str.replace(consonantStart, '') + consonantStart + 'ay';
  }
  
  translatePigLatin("consonant");
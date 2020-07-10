function commonCharacterCount(s1, s2) {
  const charMap1 = generateCharacterMap(s1);
  const charMap2 = generateCharacterMap(s2);

  return [charMap1, charMap2];
}

function generateCharacterMap(str) {
  const stringArray = str.toLowerCase().split('');
  const charMap = {};

  stringArray.forEach((char) => {
    if (charMap.hasOwnProperty(char)) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  });

  return charMap;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));

function commonCharacterCount(s1, s2) {
  // const charMap1 = generateCharacterMap(s1);
  // const charMap2 = generateCharacterMap(s2);
  //
  const charArray1 = Object.entries(generateCharacterMap(s1));
  const charArray2 = Object.entries(generateCharacterMap(s2));
  let totalCommonCharacters = 0;

  for (let i = 0; i < charArray1.length; i += 1) {
    for (let j = 0; j < charArray2.length; j += 1) {
      if (charArray1[i][0] === charArray2[j][0]) {
        if (charArray1[i][1] >= charArray2[j][1]) {
          totalCommonCharacters += charArray2[j][1];
        } else {
          totalCommonCharacters += charArray1[i][1];
        }
      }
    }
  }
  return totalCommonCharacters;
}

function generateCharacterMap(str) {
  let stringArray = [];

  if (typeof str === 'string') {
    stringArray = [...str.toLowerCase().split('')];
  }

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
console.log(commonCharacterCount('cocoa', 'cobra'));
console.log(commonCharacterCount('drd', 'xyz'));
console.log(commonCharacterCount('drd', 123));

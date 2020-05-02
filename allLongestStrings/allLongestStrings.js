function allLongestStrings(inputArray) {
  let maxLen = inputArray[0].length;

  inputArray.forEach((str) => {
    if (str.length > maxLen) {
      maxLen = str.length;
    }
  });

  const outputArray = inputArray.filter((str) => str.length === maxLen);
  return outputArray;
}

console.log(allLongestStrings(['x', 'aba', 'aa', 'ad', 'vcd', 'aba']));

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] === elemToReplace) {
      outputArray.push(substitutionElem);
    } else {
      outputArray.push(inputArray[i]);
    }
  }

  return outputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));

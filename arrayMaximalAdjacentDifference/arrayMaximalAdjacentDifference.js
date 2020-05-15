function arrayMaximalAdjacentDifference(inputArray) {
  let maxDifference = Math.abs(inputArray[0] - inputArray[1]);
  const lastEl = inputArray[inputArray.length - 1];

  for (let i = 1; i < inputArray.length; i += 1) {
    const currentEl = inputArray[i];
    const nextEl = inputArray[i + 1];
    const adjacentDifference = Math.abs(currentEl - nextEl);
    if (inputArray[i] === lastEl) {
      break;
    } else {
      if (adjacentDifference > maxDifference) {
        maxDifference = adjacentDifference;
      }
    }
  }

  return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

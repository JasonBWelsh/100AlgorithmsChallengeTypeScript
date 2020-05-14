function arrayMaxConsecutiveSum(inputArray, k) {
  let largestSum = inputArray[0] + inputArray[1];

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] === inputArray[inputArray.length - 1]) {
      break;
    }
    let currentSum = inputArray[i] + inputArray[i + 1];
    if (currentSum > largestSum) {
      largestSum = currentSum;
    }
  }

  return largestSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

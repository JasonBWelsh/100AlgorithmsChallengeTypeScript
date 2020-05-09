function arrayChange(inputArray) {
  let moves = 1;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i + 1] <= inputArray[i]) {
      inputArray[i + 1] += 1;
      moves += 1;
    }
  }

  return moves;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([2, 1, 5]));

function adjacentElementsProduct(inputArray) {
  let maxProduct = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > maxProduct) {
      maxProduct = inputArray[i] * inputArray[i + 1];
    }
  }
  return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

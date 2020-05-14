function arrayConversion(arr) {
  let isOdd = true; // if odd add if even multiply
  let x = arr; // array to push results to and finally return

  while (x.length > 1) {
    x = arrayOp(x, isOdd);
    isOdd = !isOdd;
  }
  return x;
}

function arrayOp(arr, isOdd) {
  const output = [];
  let product, sum;

  if (!isOdd) {
    for (let i = 0; i < arr.length; i += 2) {
      product = arr[i] * arr[i + 1];
      output.push(product);
    }
  } else if (isOdd) {
    for (let i = 0; i < arr.length; i += 2) {
      sum = arr[i] + arr[i + 1];
      output.push(sum);
    }
  }

  return output;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

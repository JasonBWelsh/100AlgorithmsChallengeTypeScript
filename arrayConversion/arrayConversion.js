function arrayConversion(arr) {
  let tracker = 1; // if odd add if even multiply
  let x = arr; // array to push results to and finally return

  while (x.length > 1) {
    x = arrayOp(x, tracker);
    tracker += 1;
  }
  return x;
}

function arrayOp(arr, tracker) {
  const output = [];

  if (tracker % 2 === 0 && arr.length > 1) {
    let product, sum;
    for (let i = 0; i < arr.length; i += 2) {
      product = arr[i] * arr[i + 1];
      output.push(product);
    }
  }
  if (tracker % 2 !== 0 && arr.length > 1) {
    for (let i = 0; i < arr.length; i += 2) {
      sum = arr[i] + arr[i + 1];
      output.push(sum);
    }
  }

  return output;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

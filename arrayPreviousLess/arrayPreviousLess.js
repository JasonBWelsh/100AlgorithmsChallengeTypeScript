function arrayPreviousLess(items) {
  const output = [];

  for (let i = 0; i < items.length; i += 1) {
    let counter = i - 1;

    if (i === 0) {
      output.push(-1);
    } else {
      while (counter >= 0) {
        if (items[counter] < items[i]) {
          output.push(items[counter]);
          break;
        } else {
          counter -= 1;
        }
        if (counter === 0 && items[counter] >= items[0]) {
          output.push(-1);
        }
      }
    }
  }
  return output;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

function circleOfNumbers(n, firstNumber) {
  const numberSet = [];
  const linearDistance = n / 2;
  let radialOpposite;

  let index = 0;
  while (index <= n) {
    numberSet.push(index);
    index += 1;
  }

  if (numberSet.indexOf(firstNumber) + linearDistance <= numberSet.length) {
    radialOpposite = numberSet[numberSet.indexOf(firstNumber) + linearDistance];
  } else {
    radialOpposite = numberSet[numberSet.indexOf(firstNumber) - linearDistance];
  }

  return radialOpposite;
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 3));
console.log(circleOfNumbers(10, 5));
console.log(circleOfNumbers(10, 7));
console.log(circleOfNumbers(10, 9));
console.log(circleOfNumbers(10, 0));

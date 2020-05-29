function avoidObstacles(inputArray) {
  let jumpValue = 1;
  let valueFound = false;

  while (!valueFound) {
    if (inputArray.every((cord) => cord % jumpValue !== 0)) {
      valueFound = true;
      return jumpValue;
    } else {
      jumpValue += 1;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

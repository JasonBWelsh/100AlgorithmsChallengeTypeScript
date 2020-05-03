function almostIncreasingSequence(sequence) {
  numsToRemove = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i + 1] < sequence[i]) {
      numsToRemove += 1;
    }
  }

  return numsToRemove > 1 ? true : false;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));

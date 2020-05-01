function absoluteValuesSumMinimization(a: number[]): number {
  return a.length % 2 !== 0 ? a[Math.floor(a.length / 2)] : a[Math.floor(a.length / 2) - 1];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

function areSimilar(a, b) {
  const x = a.sort().toString();
  const y = b.sort().toString();

  return x === y;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 2, 1], [2, 1, 1, 2]));
console.log(areSimilar([3, 5, 7, 7], [3, 5, 7, 3]));

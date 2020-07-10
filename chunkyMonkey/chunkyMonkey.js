function chunkyMonkey(arr, size) {
  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunkedArray.push(chunk);
  }

  return chunkedArray;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));

function alternatingSums(a) {
  const evenNums = [];
  const oddNums = [];

  a.forEach((num) => (num % 2 === 0 ? evenNums.push(num) : oddNums.push(num)));

  const evenSums = evenNums.reduce((total, num) => total + num, 0);
  const oddSums = oddNums.reduce((total, num) => total + num, 0);

  return [evenSums, oddSums];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

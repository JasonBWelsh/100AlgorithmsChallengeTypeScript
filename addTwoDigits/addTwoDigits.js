function addTwoDigits(n) {
  const parts = n.toString().split('');

  return parts.reduce((total, i) => total + parseInt(i), 0);
}

console.log(addTwoDigits(29));

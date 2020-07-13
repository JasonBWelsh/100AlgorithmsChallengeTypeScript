function compareIntegers(a, b) {
  if (parseInt(a) > parseInt(b)) return 'greater';
  if (parseInt(a) < parseInt(b)) return 'less';
  if (parseInt(a) === parseInt(b)) return 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));

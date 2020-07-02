function characterParity(symbol) {
  const parsedSymbol = parseInt(symbol);

  if (isNaN(parsedSymbol)) return 'Not a digit';

  return parsedSymbol % 2 === 0 ? 'Even' : 'Odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));

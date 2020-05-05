function alphabeticShift(inputString) {
  const a = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const output = [];

  for (let i = 0; i < inputString.length; i++) {
    let index = a.indexOf(inputString.charAt(i));
    if (index === a.length - 1) {
      output.push(a[0]);
    } else if (index !== a.length - 1) {
      output.push(a[index + 1]);
    }
  }
  return output;
}

console.log(alphabeticShift('crazy'));

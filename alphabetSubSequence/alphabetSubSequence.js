function alphabetSubsequence(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let indices = [];
  let isAscending = false;

  for (let i = 0; i < str.length; i++) {
    indices.push(alphabet.indexOf(str[i]));
  }

  for (let i = 0; i < indices.length; i++) {
    if (indices[i + 1] > indices[i]) {
      isAscending = true;
    } else if (indices[i + 1] <= indices[i]) {
      isAscending = false;
      break;
    } else if (indices[i] === indices[indices.length - 1]) {
      break;
    }
  }

  return isAscending;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));

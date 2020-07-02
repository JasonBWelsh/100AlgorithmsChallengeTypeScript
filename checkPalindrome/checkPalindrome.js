function checkPalindrome(inputString) {
  const reverseString = inputString.toLowerCase().split('').reverse().join('');

  return inputString.toLowerCase() === reverseString;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

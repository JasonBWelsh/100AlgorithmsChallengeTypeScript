function isCaseInsensitivePalindrome(inputString) {
  const reverseString = inputString.toLowerCase().split('').reverse().join('');
  return reverseString === inputString.toLowerCase();
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));

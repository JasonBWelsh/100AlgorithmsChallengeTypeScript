function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1701));
console.log(centuryFromYear(0001));
console.log(centuryFromYear(1203));
console.log(centuryFromYear(1812));

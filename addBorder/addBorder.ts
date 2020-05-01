function addBorder(picture: string[]): string[] {
  const wall = '*****';
  const a = picture.map(i => `*${i}*`);

  const b = ['*****', ...a, '*****']; // alternative solution : just return this

  a.unshift(wall);
  a.push(wall);

  return a;
}

console.log(addBorder(["abc", "ded"]));
function addBorder(picture) {
  const wall = '*'.repeat(picture[0].length + 2);
  const a = picture.map((i) => `*${i}*`);

  const b = [wall, ...a, wall]; // alternative solution : just return this

  a.unshift(wall);
  a.push(wall);

  return a;
}

console.log(addBorder(['abc', 'ded']));

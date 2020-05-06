function alternatingSums(a) {
  const sumMap = a.reduce(
    (map, num, index) => {
      if (index % 2 === 0) {
        map['x'] += num;
      } else {
        map['y'] += num;
      }
      return map;
    },
    { x: 0, y: 0 }
  );

  return Object.values(sumMap);
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

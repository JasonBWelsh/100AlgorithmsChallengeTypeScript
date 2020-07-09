function getDarkCells() {
  const xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  const darkCells = [];
  const lightCells = [];
  let isDarkCellEven = false;
  xAxis.forEach((xCoordinate) => {
    for (let i = 0; i < yAxis.length; i += 1) {
      const cell = `${xCoordinate}${yAxis[i]}`;
      // handle dark cells when even
      if (isDarkCellEven && yAxis[i] % 2 === 0) darkCells.push(cell);
      if (isDarkCellEven && yAxis[i] % 2 !== 0) lightCells.push(cell);
      // handle dark cells odd
      if (!isDarkCellEven && yAxis[i] % 2 !== 0) darkCells.push(cell);
      if (!isDarkCellEven && yAxis[i] % 2 === 0) lightCells.push(cell);
    }
    isDarkCellEven = !isDarkCellEven;
  });

  return [[...darkCells], [...lightCells]];
}

console.log(getDarkCells());

function chessBoardCellColor(cell1, cell2) {
  return 'wtf';
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));

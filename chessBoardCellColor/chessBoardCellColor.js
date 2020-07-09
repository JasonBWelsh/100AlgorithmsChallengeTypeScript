function getDarkCells() {
  const xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  const darkCells = [];
  // const lightCells = [];
  let isDarkCellEven = false;
  xAxis.forEach((xCord) => {
    for (let i = 0; i < yAxis.length; i += 1) {
      const cell = `${xCord}${yAxis[i]}`;
      if (isDarkCellEven && yAxis[i] % 2 === 0) darkCells.push(cell);
      if (!isDarkCellEven && yAxis[i] % 2 !== 0) darkCells.push(cell);
    }
    isDarkCellEven = !isDarkCellEven;
  });

  return darkCells;
}

console.log(getDarkCells());

function chessBoardCellColor(cell1, cell2) {
  return 'wtf';
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));

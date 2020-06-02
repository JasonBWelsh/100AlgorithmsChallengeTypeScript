function bishopAndPawn(bishop, pawn) {
  const bishopPath = getBishopPath(bishop);
  const bishopPathArray = Object.entries(bishopPath);
  const pawnPosition = getPawnPosition(pawn);

  // check if pawn is in bishop movement path
  let pawnIsDead = false;
  for (let i = 0; i < bishopPathArray.length; i += 1) {
    if (
      bishopPathArray[i][0] === pawnPosition[0] &&
      bishopPathArray[i][1] === pawnPosition[1]
    ) {
      pawnIsDead = true;
    }
  }

  return pawnIsDead;
}

function getBishopPath(bishop) {
  const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  // generate bishop movement path
  const bishopPosition = bishop.split('');
  let bishopXIndex = xAxis.indexOf(bishopPosition[0]);
  let bishopYIndex = yAxis.indexOf(parseInt(bishopPosition[1]));

  const bishopPath = {};

  let limitReached = false;

  while (!limitReached) {
    bishopPath[xAxis[bishopXIndex]] = yAxis[bishopYIndex];
    bishopXIndex += 1;
    bishopYIndex += 1;

    if (bishopXIndex === xAxis.length || bishopYIndex === yAxis.length) {
      limitReached = true;
    }
  }

  return bishopPath;
}

function getPawnPosition(pawn) {
  const pawnPosition = pawn.split('');
  pawnPosition[1] = parseInt(pawnPosition[1]);

  return pawnPosition;
}

console.log(bishopAndPawn('a1', 'c3'));

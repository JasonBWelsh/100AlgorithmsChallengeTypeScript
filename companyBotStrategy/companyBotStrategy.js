function companyBotStrategy(trainingData) {
  let totalCorrectAnswerTime = 0;
  let totalCorrectAnswers = 0;

  trainingData.forEach((dataChunk) => {
    if (dataChunk[1] === 1) {
      totalCorrectAnswerTime += dataChunk[0];
      totalCorrectAnswers += 1;
    }
  });

  const botAnswerTime = totalCorrectAnswerTime / totalCorrectAnswers;

  if (botAnswerTime > 0) {
    return botAnswerTime;
  }
  return 0;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1],
  ])
);

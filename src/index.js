import readlineSync from 'readline-sync';

export default (rulesOfGame, createQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}!`);
  const roundsCount = 3;
  console.log(rulesOfGame);
  let i = 0;
  while (i < roundsCount) {
    const { question, correctAnswer } = createQuestionAnswer();
    console.log(`${'Question: '}${question}`);
    const userAnswer = readlineSync.question(`${'Your answer: '}`);
    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `'${userAnswer}'${' is wrong answer ;(. Correct answer was'} '${correctAnswer}'`,
      );
      return console.log(`${"Let's try again,"} ${userName}!`);
    }
  }
  return console.log(`${'Congratulations,'} ${userName}!`);
};

import readlineSync from 'readline-sync';

export default (rule, createQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}!`);
  const rounds = 3;
  let i = 0;
  console.log(rule);
  while (i < rounds) {
    const { question, answer } = createQuestionAnswer();
    console.log(`${'Question: '}${question}`);
    const resultUser = readlineSync.question(`${'Your answer: '}`);
    if (String(answer) === resultUser) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `'${resultUser}'${' is wrong answer ;(. Correct answer was'} '${answer}'`,
      );
      return console.log(`${"Let's try again,"} ${userName}!`);
    }
  }
  return console.log(`${'Congratulations,'} ${userName}!`);
};

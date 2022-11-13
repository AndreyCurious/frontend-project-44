import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}!`);
  return userName;
};
export const basisOfTheGame = (rule, task) => {
  const rounds = 3;
  const userName = greetings();
  let i = 0;
  console.log(rule);
  while (i < rounds) {
    const result = task();
    console.log(`${'Question: '}${result[0]}`);
    const resultUser = readlineSync.question(`${'Your answer: '}`);
    if (result[1] == resultUser) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `'${resultUser}'${' is wrong answer ;(. Correct answer was'} '${result[1]}'`,
      );
      console.log(`${"Let's try again,"} ${userName}!`);
      break;
    }
    if (i === rounds) {
      console.log(`${'Congratulations,'} ${userName}!`);
    }
  }
};

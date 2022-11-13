import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello,'} ${userName}!`);
  return userName;
};
export const basisOfTheGame = (rule, game) => {
  const rounds = 3;
  const getUserName = greetings();
  let i = 0;
  console.log(rule);
  while (i < rounds) {
    const CorrectResult = game();
    console.log(`${'Question: '}${CorrectResult[0]}`);
    const resultUser = readlineSync.question(`${'Your answer: '}`);
    if (String(CorrectResult[1]) === resultUser) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        `'${resultUser}'${' is wrong answer ;(. Correct answer was'} '${CorrectResult[1]}'`,
      );
      console.log(`${"Let's try again,"} ${getUserName}!`);
      break;
    }
    if (i === rounds) {
      console.log(`${'Congratulations,'} ${getUserName}!`);
    }
  }
};

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
    if (task() === 'Correct!') {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${"Let's try again,"} ${userName}!`);
      break;
    }
    if (i === rounds) {
      console.log(`${'Congratulations,'} ${userName}!`);
    }
  }
};

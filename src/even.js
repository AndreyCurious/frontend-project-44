import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(` ${'Hi '} ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  while (i < 3) {
    const num = getRandomInt(101);
    console.log(`${'Question: '} ${num}`);
    const random = readlineSync.question(`${'Your answer: '}`);
    if (i === 2) {
      console.log(`${'Congratulations, '} ${userName}!`);
    }
    if (
      (num % 2 === 0 && random === 'yes')
      || (num % 2 !== 0 && random === 'no')
    ) {
      console.log('Correct!');
      i += 1;
    } else if (num % 2 === 0) {
      console.log(
        `${random} ${' is wrong answer ;(. Correct answer was "yes".'}`,
      );
      console.log(`${"Let's try again, "} ${userName}`);
      break;
    } else {
      console.log(
        `${random} ${' is wrong answer ;(. Correct answer was "no".'}`,
      );
      console.log(`${"Let's try again, "} ${userName}!`);
      break;
    }
  }
};

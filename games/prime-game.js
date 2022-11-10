import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/get-random.js';
import { basisOfTheGame } from '../src/index.js';

export default () => {
  const ruleOfPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskOfPrime = () => {
    const num = getRandomInt(101);
    console.log(`${'Question: '} ${num}`);
    const random = readlineSync.question(`${'Your answer: '}`);
    let sum = 0;
    for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) {
        sum += 1;
      }
    }
    if (
      (sum === 2 && random === 'yes')
      || (sum !== 2 && random === 'no')
    ) {
      return 'Correct!';
    }
    if (sum === 2) {
      console.log(
        `"${random}"${" is wrong answer ;(. Correct answer was 'yes'."}`,
      );
    } else {
      console.log(
        `"${random}"${' is wrong answer ;(. Correct answer was "no".'}`,
      );
    }
    return 'break!';
  };
  basisOfTheGame(ruleOfPrime, taskOfPrime);
};

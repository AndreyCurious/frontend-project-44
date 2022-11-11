import readlineSync from 'readline-sync';
import { getRandomInt } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfGcd = 'Find the greatest common divisor of given numbers.';
  const taskOfGcd = () => {
    const num1 = getRandomInt(20);
    const num2 = getRandomInt(20);
    console.log(`${'Question: '}${num1} ${num2}`);
    const random = readlineSync.question(`${'Your answer: '}`);
    let item = 1;
    if (num1 > num2) {
      for (let i = 1; i <= num2; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
          item = i;
        }
      }
    } else {
      for (let i = 1; i <= num1; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
          item = i;
        }
      }
    }
    if (Number(random) === Number(item)) {
      return 'Correct!';
    }
    console.log(
      `'${random}'${' is wrong answer ;(. Correct answer was'} '${item}'`,
    );
    return 'break!';
  };
  basisOfTheGame(ruleOfGcd, taskOfGcd);
};

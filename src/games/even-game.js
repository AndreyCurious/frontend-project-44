import readlineSync from 'readline-sync';
import { getRandomInt } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const taskOfEven = () => {
    const num = getRandomInt(101);
    console.log(`${'Question: '} ${num}`);
    const random = readlineSync.question(`${'Your answer: '}`);
    if (
      (num % 2 === 0 && random === 'yes')
      || (num % 2 !== 0 && random === 'no')
    ) {
      return 'Correct!';
    }
    if (num % 2 === 0) {
      console.log(
        `"${random}"${' is wrong answer ;(. Correct answer was "yes".'}`,
      );
    } else {
      console.log(
        `"${random}"${' is wrong answer ;(. Correct answer was "no".'}`,
      );
    }
    return 'break!';
  };
  basisOfTheGame(ruleOfEven, taskOfEven);
};

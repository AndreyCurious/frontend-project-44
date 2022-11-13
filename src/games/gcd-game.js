import { getRandomInt } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfGcd = 'Find the greatest common divisor of given numbers.';
  const getGcdData = () => {
    const resultOfGame = [];
    const firstVariable = getRandomInt(20, 1);
    const secondVariable = getRandomInt(20, 1);
    const question = (`${firstVariable} ${secondVariable}`);
    const getСorrectResult = () => {
      let divisor = 1;
      if (firstVariable > secondVariable) {
        for (let i = 1; i <= secondVariable; i += 1) {
          if (firstVariable % i === 0 && secondVariable % i === 0) {
            divisor = i;
          }
        }
      } else {
        for (let i = 1; i <= firstVariable; i += 1) {
          if (firstVariable % i === 0 && secondVariable % i === 0) {
            divisor = i;
          }
        }
      }
      return divisor;
    };
    resultOfGame.push(question);
    resultOfGame.push(getСorrectResult());
    return resultOfGame;
  };
  basisOfTheGame(ruleOfGcd, getGcdData);
};

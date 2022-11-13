import { getRandomInt } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getPrimeData = () => {
    const resultOfGame = [];
    const variable = getRandomInt(101);
    const question = (`${variable}`);
    const getСorrectResult = () => {
      let numOfDivisors = 0;
      for (let i = 1; i <= variable; i += 1) {
        if (variable % i === 0) {
          numOfDivisors += 1;
        }
      }
      if (numOfDivisors === 2) {
        return 'yes';
      }
      return 'no';
    };
    resultOfGame.push(question);
    resultOfGame.push(getСorrectResult());
    return resultOfGame;
  };
  basisOfTheGame(ruleOfPrime, getPrimeData);
};

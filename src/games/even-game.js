import { getRandomInt } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getEvenData = () => {
    const resultOfGame = [];
    const variable = getRandomInt(101);
    const question = `${variable}`;
    const getСorrectResult = () => {
      if (variable % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    resultOfGame.push(question);
    resultOfGame.push(getСorrectResult());
    return resultOfGame;
  };
  basisOfTheGame(ruleOfEven, getEvenData);
};

import { getRandomInt, getRandomOperator } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfCalc = 'What is the result of the expression?';
  const getCalcData = () => {
    const resultOfGame = [];
    const firstVariable = getRandomInt(101);
    const secondVariable = getRandomInt(101);
    const operator = getRandomOperator(['+', '-', '*']);
    const question = `${firstVariable} ${operator} ${secondVariable}`;
    const getСorrectResult = () => {
      if (operator === '-') {
        return firstVariable - secondVariable;
      }
      if (operator === '+') {
        return firstVariable + secondVariable;
      }
      return firstVariable * secondVariable;
    };
    resultOfGame.push(question);
    resultOfGame.push(getСorrectResult());
    return resultOfGame;
  };
  basisOfTheGame(ruleOfCalc, getCalcData);
};

import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const getСorrectResult = (firstVariable, secondVariable) => {
  let divisor = 1;
  let minVariable = 0;
  for (let i = 1; i <= minVariable; i += 1) {
    if (firstVariable % i === 0 && secondVariable % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

export default () => {
  const ruleOfGcd = 'Find the greatest common divisor of given numbers.';
  const createQuestionAnswer = () => {
    const firstVariable = getRandomInt(1, 20);
    const secondVariable = getRandomInt(1, 20);
    const question = (`${firstVariable} ${secondVariable}`);
    const answer = getСorrectResult(firstVariable, secondVariable);
    return { question, answer };
  };
  createBasisGame(ruleOfGcd, createQuestionAnswer);
};

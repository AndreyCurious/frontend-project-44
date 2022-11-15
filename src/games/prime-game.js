import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const getСorrectResult = (variable) => {
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

export default () => {
  const ruleOfPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const createQuestionAnswer = () => {
    const variable = getRandomInt(101);
    const question = (`${variable}`);
    const answer = getСorrectResult(variable);
    return { question, answer };
  };
  createBasisGame(ruleOfPrime, createQuestionAnswer);
};

import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const getСorrectResult = (variable) => {
  if (variable % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => {
  const ruleOfEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const createQuestionAnswer = () => {
    const variable = getRandomInt(101);
    const question = `${variable}`;
    const answer = getСorrectResult(variable);
    return { question, answer };
  };
  createBasisGame(ruleOfEven, createQuestionAnswer);
};

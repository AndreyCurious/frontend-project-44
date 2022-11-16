import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const isEven = (variable) => {
  if (variable % 2 === 0) {
    return true;
  }
  return false;
};

const createQuestionAnswer = () => {
  const variable = getRandomInt();
  const question = `${variable}`;
  let answer = '';
  if (isEven(variable)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return { question, answer };
};

export default () => {
  const ruleOfEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  createBasisGame(ruleOfEven, createQuestionAnswer);
};

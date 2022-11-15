import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const getRandomOperator = (arr) => {
  const alert = Math.floor(Math.random() * arr.length);
  return arr[alert];
};
const getСorrectResult = (firstVariable, operator, secondVariable) => {
  if (operator === '-') {
    return firstVariable - secondVariable;
  }
  if (operator === '+') {
    return firstVariable + secondVariable;
  }
  return firstVariable * secondVariable;
};
export default () => {
  const ruleOfCalc = 'What is the result of the expression?';
  const createQuestionAnswer = () => {
    const firstVariable = getRandomInt(101);
    const operator = getRandomOperator(['+', '-', '*']);
    const secondVariable = getRandomInt(101);
    const question = `${firstVariable} ${operator} ${secondVariable}`;
    const answer = getСorrectResult(firstVariable, operator, secondVariable);
    return { question, answer };
  };
  createBasisGame(ruleOfCalc, createQuestionAnswer);
};

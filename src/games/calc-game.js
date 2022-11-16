import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const getRandomOperator = (arr) => {
  const alert = Math.floor(Math.random() * arr.length);
  return arr[alert];
};

const getСorrectResult = (firstVariable, operator, secondVariable) => {
  switch (operator) {
    case '-':
      return firstVariable - secondVariable;
    case '+':
      return firstVariable + secondVariable;
    case '*':
      return firstVariable * secondVariable;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const createQuestionAnswer = () => {
  const firstVariable = getRandomInt();
  const operator = getRandomOperator(['+', '-', '*']);
  const secondVariable = getRandomInt();
  const question = `${firstVariable} ${operator} ${secondVariable}`;
  const answer = getСorrectResult(firstVariable, operator, secondVariable);
  return { question, answer };
};

export default () => {
  const ruleOfCalc = 'What is the result of the expression?';
  createBasisGame(ruleOfCalc, createQuestionAnswer);
};

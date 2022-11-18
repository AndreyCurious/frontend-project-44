import getRandomInt from '../helpers.js';
import startGame from '../index.js';

const getRandomOperator = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const getCalculationAnswer = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '-':
      return firstNumber - secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const createQuestionAnswer = () => {
  const firstNumber = getRandomInt();
  const operator = getRandomOperator(['+', '-', '*']);
  const secondNumber = getRandomInt();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = getCalculationAnswer(firstNumber, operator, secondNumber);
  return { question, correctAnswer };
};

export default () => {
  const ruleOfCalc = 'What is the result of the expression?';
  startGame(ruleOfCalc, createQuestionAnswer);
};

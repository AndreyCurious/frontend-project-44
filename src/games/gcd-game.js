import getRandomInt from '../helpers.js';
import startGame from '../index.js';

const getMaxDivisor = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const thirdNumber = firstNumber % secondNumber;
    return getMaxDivisor(secondNumber, thirdNumber);
  }
  return firstNumber;
};

export default () => {
  const ruleOfGcd = 'Find the greatest common divisor of given numbers.';
  const createQuestionAnswer = () => {
    const firstNumber = getRandomInt(1, 20);
    const secondNumber = getRandomInt(1, 20);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getMaxDivisor(firstNumber, secondNumber);
    return { question, correctAnswer };
  };
  startGame(ruleOfGcd, createQuestionAnswer);
};

import getRandomInt from '../helpers.js';
import startGame from '../index.js';

const getGCD = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const thirdNumber = firstNumber % secondNumber;
    return getGCD(secondNumber, thirdNumber);
  }

  return firstNumber;
};

export default () => {
  const ruleOfGcd = 'Find the greatest common divisor of given numbers.';

  const createQuestionAnswer = () => {
    const firstNumber = getRandomInt(1, 20);
    const secondNumber = getRandomInt(1, 20);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getGCD(firstNumber, secondNumber);

    return { question, correctAnswer };
  };

  startGame(ruleOfGcd, createQuestionAnswer);
};

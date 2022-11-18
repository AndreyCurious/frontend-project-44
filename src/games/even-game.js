import getRandomInt from '../helpers.js';
import startGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const createQuestionAnswer = () => {
  const number = getRandomInt();
  const question = `${number}`;

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  const ruleOfEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(ruleOfEven, createQuestionAnswer);
};

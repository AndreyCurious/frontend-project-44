import getRandomInt from '../helpers.js';
import startGame from '../index.js';

const isPrime = (num) => {
  let amountDivisors = 0;

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      amountDivisors += 1;
    }
  }

  return amountDivisors === 2;
};

const createQuestionAnswer = () => {
  const number = getRandomInt();
  const question = `${number}`;

  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  const ruleOfPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(ruleOfPrime, createQuestionAnswer);
};

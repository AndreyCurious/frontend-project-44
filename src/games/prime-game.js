import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const isPrime = (variable) => {
  let numOfDivisors = 0;
  for (let i = 1; i <= variable; i += 1) {
    if (variable % i === 0) {
      numOfDivisors += 1;
    }
  }
  if (numOfDivisors === 2) {
    return true;
  }
  return false;
};

const createQuestionAnswer = () => {
  const variable = getRandomInt();
  const question = `${variable}`;
  let answer = '';
  if (isPrime(variable)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return { question, answer };
};

export default () => {
  const ruleOfPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  createBasisGame(ruleOfPrime, createQuestionAnswer);
};

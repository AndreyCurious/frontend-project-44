import readlineSync from 'readline-sync';
import { getRandomInt, getRandomOperator } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfCalc = 'What is the result of the expression?';

  const taskOfCalc = () => {
    const num1 = getRandomInt(101);
    const num2 = getRandomInt(101);
    const operator = getRandomOperator(['+', '-', '*']);
    console.log(`${'Question: '}${num1}${operator}${num2}`);
    const random = readlineSync.question(`${'Your answer: '}`);

    let result = 0;
    if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '*') {
      result = num1 * num2;
    }
    switch (Number(random)) {
      case Number(result):
        return 'Correct!';
      default:
        console.log(`'${random}' is wrong answer ;(. Correct answer was '${result}'.`);
        return 'break!';
    }
  };
  basisOfTheGame(ruleOfCalc, taskOfCalc);
};

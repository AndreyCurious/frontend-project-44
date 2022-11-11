import readlineSync from 'readline-sync';
import { getRandomInt } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfProgression = 'What number is missing in the progression?';
  const taskOfProgression = () => {
    const items = getRandomInt(11, 5);
    const start = getRandomInt(101);
    const interval = getRandomInt(10, 1);
    const number = getRandomInt(items);
    const progression = [];
    for (let i = start; i < start + (items * interval); i += interval) {
      progression.push(i);
    }
    const uniknow = progression[number];
    progression[number] = '..';
    console.log(`${'Question: '} ${progression.join(' ')}`);
    const random = readlineSync.question(`${'Your answer: '}`);
    if (Number(random) === Number(uniknow)) {
      return 'Correct!';
    }
    console.log(
      `'${random}'${' is wrong answer ;(. Correct answer was'} '${uniknow}'`,
    );
    return 'break!';
  };
  basisOfTheGame(ruleOfProgression, taskOfProgression);
};

import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const getProgression = (itemsProgression) => {
  const startProgression = getRandomInt(101);
  const interval = getRandomInt(10, 1);
  const progression = [];
  for (let i = startProgression; i < startProgression
    + (itemsProgression * interval); i += interval) {
    progression.push(i);
  }
  return progression;
};

export default () => {
  const ruleOfProgression = 'What number is missing in the progression?';
  const getProgressionData = () => {
    const itemsProgression = getRandomInt(11, 5);
    const indexUnknowNum = getRandomInt(itemsProgression);
    const progression = getProgression(itemsProgression);
    const uniknowNum = progression[indexUnknowNum];
    progression[indexUnknowNum] = '..';
    const question = progression.join(' ');
    const answer = uniknowNum;
    return { question, answer };
  };
  createBasisGame(ruleOfProgression, getProgressionData);
};

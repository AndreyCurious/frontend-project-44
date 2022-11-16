import getRandomInt from '../helpers.js';
import createBasisGame from '../index.js';

const getProgression = (itemsProgression) => {
  const startProgression = getRandomInt();
  const interval = getRandomInt(1, 10);
  const progression = [];
  const finishProgression = startProgression + (itemsProgression * interval);
  for (let i = startProgression; i < finishProgression; i += interval) {
    progression.push(i);
  }
  return progression;
};

const getProgressionData = () => {
  const itemsProgression = getRandomInt(5, 11);
  const indexUnknowNum = getRandomInt(0, itemsProgression);
  const progression = getProgression(itemsProgression);
  const uniknowNum = progression[indexUnknowNum];
  progression[indexUnknowNum] = '..';
  const question = progression.join(' ');
  const answer = uniknowNum;
  return { question, answer };
};

export default () => {
  const ruleOfProgression = 'What number is missing in the progression?';
  createBasisGame(ruleOfProgression, getProgressionData);
};

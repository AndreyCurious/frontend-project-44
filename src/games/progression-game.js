import getRandomInt from '../helpers.js';
import startGame from '../index.js';

const getProgression = (amountItems, firstItem, interval) => {
  const progression = [];
  const lastItem = firstItem + (amountItems * interval);
  for (let i = firstItem; i < lastItem; i += interval) {
    progression.push(i);
  }
  return progression;
};

const createQuestionAnswer = () => {
  const firstItemProgression = getRandomInt();
  const intervalProgression = getRandomInt(1, 10);
  const amountItemsProgression = getRandomInt(5, 11);
  const indexHiddenNum = getRandomInt(0, amountItemsProgression);
  const progression = getProgression(
    amountItemsProgression,
    firstItemProgression,
    intervalProgression,
  );
  const hiddenNum = progression[indexHiddenNum];
  progression[indexHiddenNum] = '..';
  const question = progression.join(' ');
  const correctAnswer = hiddenNum;
  return { question, correctAnswer };
};

export default () => {
  const ruleOfProgression = 'What number is missing in the progression?';
  startGame(ruleOfProgression, createQuestionAnswer);
};

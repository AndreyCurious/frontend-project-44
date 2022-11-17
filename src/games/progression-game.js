import getRandomInt from '../helpers.js';
import startGame from '../index.js';

const getProgression = (itemsProgressionNum, startProgressionNum, intervalProgressionNum) => {
  const progression = [];
  const finishProgression = startProgressionNum + (itemsProgressionNum * intervalProgressionNum);
  for (let i = startProgressionNum; i < finishProgression; i += intervalProgressionNum) {
    progression.push(i);
  }
  return progression;
};

const createQuestionAnswer = () => {
  const startProgressionNum = getRandomInt();
  const intervalProgressionNum = getRandomInt(1, 10);
  const itemsProgressionNum = getRandomInt(5, 11);
  const indexUnknowNum = getRandomInt(0, itemsProgressionNum);
  const progression = getProgression(
    itemsProgressionNum,
    startProgressionNum,
    intervalProgressionNum,
  );
  const uniknowNum = progression[indexUnknowNum];
  progression[indexUnknowNum] = '..';
  const question = progression.join(' ');
  const correctAnswer = uniknowNum;
  return { question, correctAnswer };
};

export default () => {
  const ruleOfProgression = 'What number is missing in the progression?';
  startGame(ruleOfProgression, createQuestionAnswer);
};

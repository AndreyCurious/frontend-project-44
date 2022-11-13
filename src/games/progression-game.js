import { getRandomInt } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfProgression = 'What number is missing in the progression?';
  const getProgressionData = () => {
    const resultOfGame = [];
    const itemsOfProgression = getRandomInt(11, 5);
    const startOfProgression = getRandomInt(101);
    const interval = getRandomInt(10, 1);
    const indexOfUnknowNum = getRandomInt(itemsOfProgression);
    const getProgression = () => {
      const progression = [];
      for (let i = startOfProgression; i < startOfProgression + (itemsOfProgression * interval); i += interval) {
        progression.push(i);
      }
      return progression;
    };
    const progression = getProgression();
    const uniknowNum = progression[indexOfUnknowNum];
    progression[indexOfUnknowNum] = '..';
    resultOfGame.push(progression.join(' '));
    resultOfGame.push(uniknowNum);
    return resultOfGame;
  };
  basisOfTheGame(ruleOfProgression, getProgressionData);
};

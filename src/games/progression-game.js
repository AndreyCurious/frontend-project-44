import { getRandomInt } from '../get-random.js';
import { basisOfTheGame } from '../index.js';

export default () => {
  const ruleOfProgression = 'What number is missing in the progression?';
  const getProgressionData = () => {
    const resultOfGame = [];
    const itemsProgression = getRandomInt(11, 5);
    const startProgression = getRandomInt(101);
    const interval = getRandomInt(10, 1);
    const indexUnknowNum = getRandomInt(itemsProgression);
    const getProgression = () => {
      const progression = [];
      for (let i = startProgression; i < startProgression
        + (itemsProgression * interval); i += interval) {
        progression.push(i);
      }
      return progression;
    };
    const progression = getProgression();
    const uniknowNum = progression[indexUnknowNum];
    progression[indexUnknowNum] = '..';
    resultOfGame.push(progression.join(' '));
    resultOfGame.push(uniknowNum);
    return resultOfGame;
  };
  basisOfTheGame(ruleOfProgression, getProgressionData);
};

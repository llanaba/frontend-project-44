import play from '../index.js';
import { findGcd, getRandomNumber } from '../utils.js';

const prepareRoundData = (numberScope) => ({
  randomNumberOne: getRandomNumber(numberScope),
  randomNumberTwo: getRandomNumber(numberScope),
});

const generateAnswer = (gameData) => {
  const correctAnswer = findGcd(
    gameData.randomNumberOne,
    gameData.randomNumberTwo,
  ).toString();
  return correctAnswer;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.randomNumberOne} ${gameData.randomNumberTwo}`;
  const correctAnswer = generateAnswer(gameData);
  return {
    question,
    correctAnswer,
  };
};

const playBrainGcd = () => {
  const game = {
    rules: 'Find the greatest common divisor of given numbers.',
    numberScope: 100,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainGcd;

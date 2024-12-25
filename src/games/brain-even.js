import { isEven, getRandomNumber } from '../utils.js';
import play from '../index.js';

const prepareRoundData = (numberScope) => ({
  randomNumber: getRandomNumber(numberScope),
});

const generateAnswer = (gameData) => {
  const correctAnswer = isEven(gameData.randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.randomNumber}`;
  const correctAnswer = generateAnswer(gameData);
  return {
    question,
    correctAnswer,
  };
};

const playBrainEven = () => {
  const game = {
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    numberScope: 100,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainEven;

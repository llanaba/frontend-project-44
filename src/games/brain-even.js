import { isEven, getRandomNumber } from '../utils.js';
import play from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberScope = 100;

const prepareRoundData = (numberScope) => {
  return {
    randomNumber: getRandomNumber(numberScope),
  };
};

const generateAnswer = (gameData) => {
  const correctAnswer = isEven(gameData.randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

const generateRound = (gameData) => {
  const question = `Question: ${gameData.randomNumber}`;
  const answer = generateAnswer(gameData);
  return {
    question: question,
    correctAnswer: answer,
  };
};

const playBrainEven = () => {
  const game = {
    rules,
    numberScope,
    prepareRoundData,
    generateRound,
  };

  play(game);
};

export default playBrainEven;

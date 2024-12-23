import greetUser from '../userInteraction.js';
import { isEven, getRandomNumber } from '../utils.js';
import play from '../index.js';

const userName = greetUser();
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberScope = 100;

const prepareBrainEvenRoundData = (numberScope) => {
  return {
    randomNumber: getRandomNumber(numberScope),
  };
};

const generateBrainEvenAnswer = (gameData) => {
  const correctAnswer = isEven(gameData.randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

const generateBrainEvenQuestion = (gameData) => {
  const question = `Question: ${gameData.randomNumber}`;
  const answer = generateBrainEvenAnswer(gameData);
  return {
    question: question,
    correctAnswer: answer,
  };
};

const playBrainEven = () => {
  const game = {
    user: userName,
    rules: rules,
    numberScope: numberScope,
    prepareRoundData: prepareBrainEvenRoundData,
    generateRound: generateBrainEvenQuestion,
  };

  play(game);
};

export default playBrainEven;

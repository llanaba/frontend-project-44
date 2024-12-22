import getRandomNumber from './random.js';
import isEven from './is-even.js';

const playBrainEven = (numberOfQuestions, maxNumber) => {
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const randomNumber = getRandomNumber(maxNumber);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = isEven(randomNumber);
    console.log(correctAnswer);
    const userAnswer = getUserAnswer('Your answer: ');
  }
};

export default playBrainEven;

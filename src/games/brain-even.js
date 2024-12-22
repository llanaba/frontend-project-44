import { getUserAnswer } from '../cli.js';
import getRandomNumber from '../random.js';
import isEven from '../is-even.js';
import isCorrect from '../is-correct.js';

const playBrainEven = (userName, rules, numberOfQuestions, maxNumber) => {
  console.log(rules);
  for (let i = 1; i <= numberOfQuestions; i += 1) {
    const randomNumber = getRandomNumber(maxNumber);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const userAnswer = getUserAnswer('Your answer: ');
    if (isCorrect(correctAnswer, userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainEven;

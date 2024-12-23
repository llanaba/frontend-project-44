import { getUserAnswer } from '../cli.js';
import getRandomNumber from '../random.js';
import isCorrect from '../is-correct.js';
// import play, { getCorrectAnswer } from '../index.js';
import play from '../index.js';

const operators = ['+', '-', '*'];

const performCalculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

const prepareBrainCalcRoundData = (numberScope) => {
  return {
    randomNumberOne: getRandomNumber(numberScope),
    randomNumberTwo: getRandomNumber(numberScope),
    randomOperator: operators[getRandomNumber(2)],
  };
};

const generateBrainCalcAnswer = (gameData) => {
  const correctAnswer = performCalculation(
    gameData.randomNumberOne,
    gameData.randomNumberTwo,
    gameData.randomOperator
  ).toString();
  return correctAnswer;
};

const generateBrainCalcQuestion = (gameData) => {
  const question = `Question: ${gameData.randomNumberOne} ${gameData.randomOperator} ${gameData.randomNumberTwo}`;
  const answer = generateBrainCalcAnswer(gameData);
  return {
    question: question,
    correctAnswer: answer,
  };
};

// const playBrainCalcRound = (roundData) => {
//   // console.log(roundData);
//   const question = generateQuestion(roundData);
//   console.log(question);
//   const correctAnswer = generateAnswer(roundData);
//   // console.log(`ANSWER FOR THIS ROUND IS: ${correctAnswer}`);
//   const userAnswer = getUserAnswer('Your answer: ');
//   // console.log(`USER ANSWER FOR THIS ROUND IS: ${userAnswer}`);
//   return {
//     question: question,
//     correctAnswer: correctAnswer,
//     userAnswer: userAnswer,
//   };
// const result = compareAnswers(correctAnswer, userAnswer);
// console.log(`RESULT OF THIS ROUND IS: ${result}`);
// return result;
// return 4;
// };

const playBrainCalc = (userName, rules, numberOfRounds, numberScope) => {
  const game = {
    user: userName,
    rules: rules,
    numberOfRounds: numberOfRounds,
    numberScope: numberScope,
    generateQuestion: generateBrainCalcQuestion,
    // playRound: playBrainCalcRound,
    prepareRoundData: prepareBrainCalcRoundData,
    // calculateAnswer: calculateAnswer,
    // gameRoundData: prepareGameData,
  };

  play(game);
};

// const playBrainCalc = (userName, rules, numberOfQuestions, maxNumber) => {
//   console.log(rules);
//   for (let i = 1; i <= numberOfQuestions; i += 1) {
//     const randomNumberOne = getRandomNumber(maxNumber);
//     const randomNumberTwo = getRandomNumber(maxNumber);
//     const randomOperator = operators[getRandomNumber(2)];

//     const correctAnswer = getCorrectAnswer(
//       performCalculation,
//       randomNumberOne,
//       randomNumberTwo,
//       randomOperator
//     ).toString();
//     console.log(
//       `Question: ${randomNumberOne} ${randomOperator} ${randomNumberTwo}`
//     );
//     const userAnswer = getUserAnswer('Your answer: ');

//     if (isCorrect(correctAnswer, userAnswer)) {
//       console.log('Correct!');
//     } else {
//       console.log(
//         `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'`
//       );
//       console.log(`Let's try again, ${userName}!`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${userName}!`);
// };

export default playBrainCalc;

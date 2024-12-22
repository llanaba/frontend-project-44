import readlineSync from 'readline-sync';

const getUserAnswer = (questionText) => readlineSync.question(questionText);

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greetUser;
export { getUserAnswer };

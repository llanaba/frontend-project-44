import readlineSync from 'readline-sync';

const getUserName = (questionText) => {
  return readlineSync.question(questionText);
};

export default getUserName;

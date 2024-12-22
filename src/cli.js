import readlineSync from 'readline-sync';

const getUserName = (questionText) => readlineSync.question(questionText);

export default getUserName;

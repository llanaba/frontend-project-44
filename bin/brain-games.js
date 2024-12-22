#!/usr/bin/env node

import getUserName from '../src/cli.js';
import launchBrainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName('May I have your name? ');
console.log(`Hello, ${userName}!`);
launchBrainEven();

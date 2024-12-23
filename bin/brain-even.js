#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playBrainEven from '../src/games/brain-even.js';

const userName = greetUser();
playBrainEven(userName);

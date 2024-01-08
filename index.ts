import MathWorker from './src/workers.js'
import { randomInt } from 'crypto';

console.log('Starting work.');

const myMw = new MathWorker(10);

while (myMw.getTokens() > 0) {
  console.log(`Tokens remaining: ${myMw.getTokens()}`);
  let x = randomInt(0, 100);
  let y = randomInt(0, 100);

  console.log(`${x} + ${y} = ${myMw.add(x, y)}`);
  console.log(`${x} - ${y} = ${myMw.subtract(x, y)}`);
}

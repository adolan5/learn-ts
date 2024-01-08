import { expect } from 'chai';
import MathWorker from '../src/workers.js';

describe('Test MathWorker', () => {

  const mw = new MathWorker(5);

  it('should add two numbers', () => {
    expect(mw.add(5, 3)).to.equal(8);
    expect(mw.getTokens()).to.equal(4);
  });

  it('should subtract two numbers', () => {
    expect(mw.subtract(5, 3)).to.equal(2);
    expect(mw.getTokens()).to.equal(3);
  });
});

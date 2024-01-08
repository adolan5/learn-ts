import * as chai from 'chai';
import MathWorker from '../src/workers.js';

const expect = chai.expect;

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

  it('should return its UUID', () => {
    expect(mw.getId()).to.match(/^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/)
  });
});

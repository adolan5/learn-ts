import MathWorker from '../src/workers';

describe('Test MathWorker', () => {

  const mw = new MathWorker(5);

  it('should add two numbers', () => {
    expect(mw.add(5, 3)).toEqual(8);
    expect(mw.getTokens()).toEqual(4);
  });
});

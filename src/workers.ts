export default class MathWorker {
  private workTokens: number;

  constructor(initTokens: number) {
    this.workTokens = initTokens;
  }

  public getTokens(): number {
    return this.workTokens;
  }

  public add(x: number, y: number): number {
    return x + y;
  }
}

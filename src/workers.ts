export default class MathWorker {
  private workTokens: number;

  constructor(initTokens: number) {
    this.workTokens = initTokens;
  }

  private workPrecheck() {
    this.workTokens -= 1;
  }

  public getTokens(): number {
    return this.workTokens;
  }

  public add(x: number, y: number): number {
    this.workPrecheck();
    return x + y;
  }
}

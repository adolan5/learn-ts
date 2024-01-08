import { v4 as uuidv4 } from 'uuid';

export default class MathWorker {
  private uuid: string;
  private workTokens: number;

  constructor(initTokens: number) {
    this.workTokens = initTokens;
    this.uuid = uuidv4();
    console.log(`uuid: ${this.uuid}`);
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

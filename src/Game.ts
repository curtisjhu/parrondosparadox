class Game {
  public probability: number;
  public e: number;
  public score: number;
  protected data: number[];

  constructor() {
    this.score = 0;
    this.data = [0];
  }
}

export type DataConfig = {
	label: string,
	fill: boolean,
	borderColor: string
	tension: string,
	data: number[]
}


export default Game;
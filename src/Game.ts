class Game {
  public score: number;
  protected data: number[];

  constructor() {
    this.score = 0;
    this.data = [0];
  }
  public getScore(){
    return this.score;
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
// @ts-check
import {Chart} from "chart.js"

class GameA {
  probability: number;
  score: number;
  e: number;
  private gameNumber: number;
  private data: Object;
  private dataSet: number[];

  constructor() {
    this.e = 1 / 30;
    this.probability = 1 / 2 - this.e;
    this.score = 0;
    this.dataSet = [0];
    this.gameNumber = 0;
    this.data = {
      labels: [...Array(this.gameNumber).keys()],
      datasets: [
        {
          label: "Game A",
          data: this.dataSet,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  }

  playOnce(): number {
    this.gameNumber++;
    var num;
    if (Math.random() < this.probability) num = 1;
    else num = -1;

    this.score += num;
	this.dataSet.push(this.score)

	console.log(num)
    return num;
  }

  graph() {
    var config: any = {
      type: "line",
	  data: this.data
    };

	// canvas for GameA must have id "GameA"
	const ctx = document.getElementById("GameA") as HTMLCanvasElement;
	const chart = new Chart(ctx, config)

  }
}

export default GameA;
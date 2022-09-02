import Game, { DataConfig } from './Game'
import GameA from './GameA'
import GameB from './GameB'


class GameAandB extends Game {
	public probability: number;
	private gameA: GameA;
	private gameB: GameB;

	constructor(){
		super();
		this.probability = 0.5;
		this.gameA = new GameA();
		this.gameB = new GameB();

	}

	play(): number {
		var num: number;
		if(Math.random() < this.probability) {
			num = this.gameA.play();
		} else {
			num = this.gameB.play();
		}

		this.score += num;
		this.data.push(this.score);

		return num;
	}

	playMultiple(n: number): number {
		while(n--){
			this.play();
		}
		return this.score;
	}

    getDataConfig(): DataConfig {
        const cfg: DataConfig = {
            label: "Game A and B",
            fill: true,
            borderColor: "rgb(192, 72, 192)",
            tension: "0.1",
            data: this.data,
        };
        return cfg;
    }
}

export default GameAandB;
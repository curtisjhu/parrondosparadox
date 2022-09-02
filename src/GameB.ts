import Game, { DataConfig } from "./Game";

class GameB extends Game {
    public prob1: number;
    public prob2: number;
    public e: number;

    constructor() {
        super();
        this.e = 1 / 32;
        this.prob1 = 1 / 10 - this.e;
        this.prob2 = 3 / 4 - this.e;
    }

    play(): number {
        var num: number;
        if (this.score % 3 == 0) {
            if (Math.random() < this.prob1) num = 1;
            else num = -1;
        } else {
            if (Math.random() < this.prob2) num = 1;
            else num = -1;
        }

        this.score += num;
        this.data.push(this.score);

        return num;
    }

    playMultiple(n: number): number {
        while (n--) {
            this.play();
        }
        return this.score;
    }

    getDataConfig(): DataConfig {
        return {
            label: "Game B",
            data: this.data,
            fill: true,
            borderColor: "rgb(192, 192, 72)",
            tension: "0.1",
        };
    }
}

export default GameB;

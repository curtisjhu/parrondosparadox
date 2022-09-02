// @ts-check
import Game, { DataConfig } from "./Game";

class GameA extends Game {
    public probability: number;
    public e: number;

    constructor() {
        super();
        this.e = 1 / 30;
        this.probability = 1 / 2 - this.e;
    }

    play(): number {
        var num: number;
        if (Math.random() < this.probability) num = 1;
        else num = -1;

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
        const cfg: DataConfig = {
            label: "Game A",
            fill: true,
            borderColor: "rgb(72, 192, 192)",
            tension: "0.1",
            data: this.data,
        };
        return cfg;
    }
}

export default GameA;

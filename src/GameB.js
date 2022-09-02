"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("./Game"));
class GameB extends Game_1.default {
    constructor() {
        super();
        this.e = 1 / 32;
        this.prob1 = 1 / 10 - this.e;
        this.prob2 = 3 / 4 - this.e;
    }
    play() {
        var num;
        if (this.score % 3 == 0) {
            if (Math.random() < this.prob1)
                num = 1;
            else
                num = -1;
        }
        else {
            if (Math.random() < this.prob2)
                num = 1;
            else
                num = -1;
        }
        this.score += num;
        this.data.push(this.score);
        return num;
    }
    playMultiple(n) {
        while (n--) {
            this.play();
        }
        return this.score;
    }
    getDataConfig() {
        return {
            label: "Game B",
            data: this.data,
            fill: true,
            borderColor: "rgb(192, 192, 72)",
            tension: "0.1",
        };
    }
}
exports.default = GameB;

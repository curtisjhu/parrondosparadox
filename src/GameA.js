"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("./Game"));
class GameA extends Game_1.default {
    constructor() {
        super();
        this.e = 1 / 30;
        this.probability = 1 / 2 - this.e;
    }
    play() {
        var num;
        if (Math.random() < this.probability)
            num = 1;
        else
            num = -1;
        this.score += num;
        this.data.push(this.score);
        return this.score;
    }
    playMultiple(n) {
        while (n--) {
            this.play();
        }
        return this.score;
    }
    getDataConfig() {
        const cfg = {
            label: "Game A",
            fill: true,
            borderColor: "rgb(72, 192, 192)",
            tension: "0.1",
            data: this.data
        };
        return cfg;
    }
}
exports.default = GameA;

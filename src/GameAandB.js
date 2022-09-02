"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("./Game"));
const GameA_1 = __importDefault(require("./GameA"));
const GameB_1 = __importDefault(require("./GameB"));
class GameAandB extends Game_1.default {
    constructor() {
        super();
        this.probability = 0.5;
        this.gameA = new GameA_1.default();
        this.gameB = new GameB_1.default();
    }
    play() {
        var num;
        if (Math.random() < this.probability) {
            num = this.gameA.play();
        }
        else {
            num = this.gameB.play();
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
        const cfg = {
            label: "Game A and B",
            fill: true,
            borderColor: "rgb(192, 72, 192)",
            tension: "0.1",
            data: this.data,
        };
        return cfg;
    }
}
exports.default = GameAandB;

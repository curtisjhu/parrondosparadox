"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("./Game"));
class GameB extends Game_1.default {
    constructor() {
        super();
    }
    getDataConfig() {
        return {
            type: "line",
            data: {
                label: "Game B",
                data: this.data,
                fill: true,
                borderColor: "rgb(192, 192, 72)",
                tension: 0.1,
            },
        };
    }
}
exports.default = GameB;

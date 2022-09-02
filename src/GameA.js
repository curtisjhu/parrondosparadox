"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chart_js_1 = require("chart.js");
class GameA {
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
    playOnce() {
        this.gameNumber++;
        var num;
        if (Math.random() < this.probability)
            num = 1;
        else
            num = -1;
        this.score += num;
        this.dataSet.push(this.score);
        console.log(num);
        return num;
    }
    graph() {
        var config = {
            type: "line",
            data: this.data
        };
        const ctx = document.getElementById("GameA");
        const chart = new chart_js_1.Chart(ctx, config);
    }
}
exports.default = GameA;

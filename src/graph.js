"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chart_js_1 = require("chart.js");
class Graph {
    constructor() {
        this.root = document.getElementById("game");
        this.dataSets = [];
        this.numberOfPlays = 0;
        this.genConfig();
    }
    genConfig() {
        this.config = {
            type: "line",
            title: "f",
            data: {
                labels: [...Array(this.numberOfPlays).keys()],
                datasets: this.dataSets
            },
            options: {
                events: ["click"],
                plugins: {
                    title: {
                        display: true,
                        text: "More Iterations of the Games"
                    }
                },
            }
        };
    }
    addDataPoint(label, score) {
        const i = this.chart.data.datasets.findIndex((e) => e.label == label);
        this.chart.data.datasets[i].data.push(score);
        this.chart.data.labels.push(++this.numberOfPlays);
        this.chart.update();
    }
    insertDataConfig(obj) {
        this.dataSets.push(obj);
        this.numberOfPlays = obj.data.length;
    }
    createChart() {
        this.genConfig();
        chart_js_1.Chart.register(...chart_js_1.registerables);
        this.chart = new chart_js_1.Chart(this.root, this.config);
    }
}
exports.default = Graph;

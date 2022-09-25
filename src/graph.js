"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chart_js_1 = require("chart.js");
class Graph {
    constructor(node) {
        this.root = node;
        this.dataSets = [];
        this.numberOfPlays = 0;
    }
    insertDataSets(obj) {
        this.dataSets.push(obj);
        this.numberOfPlays = Math.max(obj.data.length, this.numberOfPlays);
    }
    createChart() {
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
        chart_js_1.Chart.register(...chart_js_1.registerables);
        this.chart = new chart_js_1.Chart(this.root, this.config);
    }
}
exports.default = Graph;

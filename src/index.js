"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameA_1 = __importDefault(require("./GameA"));
const graph_1 = __importDefault(require("./graph"));
var ga, g;
function setup() {
    ga = new GameA_1.default();
    g = new graph_1.default();
    ga.playMultiple(10);
    g.createChart(ga.getDataConfig());
}
function draw() {
    var c = ga.play();
    g.addDataPoint("Game A", c);
}
setup();
let previousTimeStamp = 0;
function loop(timestamp) {
    if (timestamp - previousTimeStamp > 1000) {
        draw();
        previousTimeStamp = timestamp;
    }
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);

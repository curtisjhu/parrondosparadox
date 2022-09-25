"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const graph_1 = __importDefault(require("./graph"));
const Game_1 = require("./Game");
require("./assets/images/gamea.png");
require("./assets/images/gameb.png");
require("./assets/images/gamec.png");
require("./assets/images/iterategame.png");
function setup() {
    const code_root = document.getElementById("code");
    var imgA = document.createElement("img");
    imgA.src = "assets/images/gamea.png";
    code_root.appendChild(imgA);
    var imgB = document.createElement("img");
    imgB.src = "assets/images/gameb.png";
    code_root.appendChild(imgB);
    var imgC = document.createElement("img");
    imgC.src = "assets/images/gamec.png";
    code_root.appendChild(imgC);
    var imgIter = document.createElement("img");
    imgIter.src = "assets/images/iterategame.png";
    code_root.appendChild(imgIter);
    let ga, gb, gc;
    var gac = document.createElement("canvas");
    var gbc = document.createElement("canvas");
    var gcc = document.createElement("canvas");
    document.body.appendChild(gac);
    document.body.appendChild(gbc);
    document.body.appendChild(gcc);
    ga = new graph_1.default(gac);
    ga.insertDataSets({
        label: "Game A",
        fill: true,
        borderColor: "red",
        tension: "0.1",
        data: (0, Game_1.iterateGame)(Game_1.GameA),
    });
    ga.createChart();
    gb = new graph_1.default(gbc);
    gb.insertDataSets({
        label: "Game B",
        fill: true,
        borderColor: "blue",
        tension: "0.1",
        data: (0, Game_1.iterateGame)(Game_1.GameB),
    });
    gb.createChart();
    gc = new graph_1.default(gcc);
    gc.insertDataSets({
        label: "Game C",
        fill: true,
        borderColor: "green",
        tension: "0.1",
        data: (0, Game_1.iterateGame)(Game_1.GameC),
    });
    gc.createChart();
}
exports.setup = setup;
window.onload = setup;

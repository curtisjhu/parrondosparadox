"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw = exports.setup = void 0;
const GameA_1 = __importDefault(require("./GameA"));
const GameAandB_1 = __importDefault(require("./GameAandB"));
const GameB_1 = __importDefault(require("./GameB"));
const graph_1 = __importDefault(require("./graph"));
const htmlGame_1 = __importDefault(require("./htmlGame"));
var ga, gb, gab, g;
function setup() {
    (0, htmlGame_1.default)();
    ga = new GameA_1.default();
    g = new graph_1.default();
    gb = new GameB_1.default();
    gab = new GameAandB_1.default();
    ga.playMultiple(1000);
    gb.playMultiple(1000);
    gab.playMultiple(1000);
    g.insertDataConfig(gab.getDataConfig());
    g.insertDataConfig(ga.getDataConfig());
    g.insertDataConfig(gb.getDataConfig());
    g.createChart();
}
exports.setup = setup;
function draw() {
    ga.play();
    var c = ga.getScore();
    g.addDataPoint("Game A", c);
}
exports.draw = draw;
setup();

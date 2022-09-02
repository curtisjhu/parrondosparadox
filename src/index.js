"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameA_1 = __importDefault(require("./GameA"));
function setup() {
    const ga = new GameA_1.default();
    console.log("setup");
    console.log(ga.playOnce());
    ga.graph();
}
function draw() {
}
setup();
draw();

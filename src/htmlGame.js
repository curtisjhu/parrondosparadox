"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameA_1 = __importDefault(require("./GameA"));
const GameAandB_1 = __importDefault(require("./GameAandB"));
const GameB_1 = __importDefault(require("./GameB"));
var ga, gb, gab;
function htmltGameSetup() {
    ga = new GameA_1.default();
    gb = new GameB_1.default();
    gab = new GameAandB_1.default();
    const gaDescription = `You toss a biased coin. Probability that you'll win is a little less than one half. 
	If you win, you receive $1. Otherwise you lose $1`;
    const gbDescription = `If your winnings is divisible by 3, you toss a biased coin with a probability of winning a little less than 1/10.
	Otherwise, you'll toss a different biased coin with a probability of winning a little less than 3/4.`;
    const gabDescription = `A friend tosses a fair coin. If it lands on heads, you play Game A.
	If it lands on tails, you play Game B. You lose or win $1 each time you play`;
    setupHTML("GameA", gaDescription, "ga.play()");
    setupHTML("GameB", gbDescription, "gb.play()");
    setupHTML("GameAandB", gabDescription, "gab.play()");
}
exports.default = htmltGameSetup;
function setupHTML(root, description, f) {
    const r = document.getElementById(root);
    r.innerHTML =
        `
			<div class="font-serif text-lg font-semibold text-center">${root}</div>
			<div class="font-serif text-md">${description}</div>
			<button id="${root}-btn" class="h-10 px-6 font-semibold rounded-md bg-black text-white mt-3">
				Play Once
			</button>
			<div id="${root}-res"class="font-mono text-md"></div>
		`;
    document.getElementById(root + "-btn").addEventListener("click", function () {
        document.getElementById(root + "-res").innerText = "Won: $" + eval(f);
    });
}

// @ts-check
import GameA from "./GameA";
import GameAandB from "./GameAandB";
import GameB from "./GameB";
import Graph from "./graph";
import { loop } from "./loop";
import htmltGameSetup from "./htmlGame";

var ga: GameA, gb: GameB, gab: GameAandB, g: Graph;

export function setup(): void {
    htmltGameSetup();
    
    ga = new GameA();
    g = new Graph();
	gb = new GameB();
    gab = new GameAandB();

    ga.playMultiple(1000);
	gb.playMultiple(1000);
    gab.playMultiple(1000);

	g.insertDataConfig(gab.getDataConfig())
	g.insertDataConfig(ga.getDataConfig())
	g.insertDataConfig(gb.getDataConfig())
    g.createChart();

	
}

export function draw(): void {
    ga.play();
    var c = ga.getScore();
    g.addDataPoint("Game A", c);
}

setup();
// window.requestAnimationFrame(loop);

// @ts-check
import GameA from "./GameA";
import Graph from "./graph";

var ga: GameA, g: Graph;

function setup(): void {
	ga = new GameA();
	g = new Graph();
    ga.playMultiple(10);
    g.createChart(ga.getDataConfig());
}

function draw(): void {
	var c = ga.play();
	g.addDataPoint("Game A", c)
}
setup();

let previousTimeStamp = 0;
function loop(timestamp): void {
    if (timestamp - previousTimeStamp > 1000) {
        draw();
        previousTimeStamp = timestamp;
    }
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

// @ts-check
import GameA from './GameA'

function setup():void {
	const ga = new GameA();
	console.log("setup")
	console.log(ga.playOnce())
	ga.graph()
}

function draw():void {
	
}

setup();
draw();

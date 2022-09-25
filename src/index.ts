// @ts-check
import Graph from "./graph";
import { GameA, GameB, GameC, iterateGame } from "./Game";
require("./assets/images/gamea.png")
require("./assets/images/gameb.png")
require("./assets/images/gamec.png")
require("./assets/images/iterategame.png")

export function setup(): void {

    /** Render our images */
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


    /** Begin our games */
    let ga, gb, gc;

    var gac = document.createElement("canvas");
    var gbc = document.createElement("canvas");
    var gcc = document.createElement("canvas");
    document.body.appendChild(gac);
    document.body.appendChild(gbc);
    document.body.appendChild(gcc);

    ga = new Graph(gac);
    ga.insertDataSets({
        label: "Game A",
        fill: true,
        borderColor: "red",
        tension: "0.1",
        data: iterateGame(GameA),
    });
    ga.createChart();

    gb = new Graph(gbc);
    gb.insertDataSets({
        label: "Game B",
        fill: true,
        borderColor: "blue",
        tension: "0.1",
        data: iterateGame(GameB),
    })
    gb.createChart();

    gc = new Graph(gcc);
    gc.insertDataSets({
        label: "Game C",
        fill: true,
        borderColor: "green",
        tension: "0.1",
        data: iterateGame(GameC),
    })
    gc.createChart();


}

window.onload = setup;

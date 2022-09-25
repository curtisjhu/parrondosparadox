export type DataConfig = {
	label: string,
	fill: boolean,
	borderColor: string
	tension: string,
	data: number[]
}

const epsilon = 0.005;

export function GameA(fortune) {
    fortune += Math.random() < 0.5 - epsilon ? 1 : -1;
    return fortune;
}

export function GameB(fortune) {
    var net;
    if (fortune % 3 == 0) net = Math.random() < 0.1 - epsilon ? 1 : -1;
    else net = Math.random() < 0.75 - epsilon ? 1 : -1;
    fortune += net;
    return fortune;
}

export function GameC(fortune) {
    if (Math.random() < 0.5)
		fortune = GameA(fortune);
	else
		fortune = GameB(fortune);
	return fortune
}

export function iterateGame(game){
	const trials = 500;
	var averageOutcome = new Array(100).fill(0);
	for(var i = 0; i < trials; i++){
		var outcome: number[] = [];
		var tmp_fortune = 0;
		for(var j = 0; j < 100; j++){
			tmp_fortune = game(tmp_fortune);
			outcome.push(tmp_fortune)
		}
		averageOutcome = averageOutcome.map((c, i) => c + outcome[i]);
	}
	averageOutcome = averageOutcome.map((c) => c/trials);
	return averageOutcome;
}

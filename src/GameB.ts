import Game from './Game'

class GameB extends Game{

	constructor(){
		super();

	}

  getDataConfig() {
    return {
      type: "line",
      data: {
        label: "Game B",
        data: this.data,
        fill: true,
        borderColor: "rgb(192, 192, 72)",
        tension: 0.1,
      },
    };
  }
	
}

export default GameB;
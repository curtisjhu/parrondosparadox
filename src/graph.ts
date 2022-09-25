import { Chart, registerables } from "chart.js"
import { DataConfig } from "./Game";

class Graph {
	public root: HTMLCanvasElement;
    private config: any;
	private dataSets: object[];
	private numberOfPlays: number;
	private chart: Chart;

	constructor(node){
		this.root = node as HTMLCanvasElement;
		this.dataSets = [];
		this.numberOfPlays = 0;
	}

	insertDataSets(obj: DataConfig) {
		this.dataSets.push(obj);
		this.numberOfPlays = Math.max(obj.data.length, this.numberOfPlays);
	}

	createChart(){
		this.config = {
      		type: "line",
			title: "f",
      		data: {
				labels: [...Array(this.numberOfPlays).keys()],
				datasets: this.dataSets
			},
			options: {
				events: ["click"],
				plugins: {
					title: {
						display: true,
						text: "More Iterations of the Games"
					}
				},
			}
		}
		Chart.register(...registerables);
		this.chart = new Chart(this.root, this.config)
	}
}

export default Graph;
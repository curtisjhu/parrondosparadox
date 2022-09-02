import { Chart, registerables } from "chart.js"
import { DataConfig } from "./Game";

class Graph {
	public root: HTMLCanvasElement;
    private config: any;
	private dataSets: object[];
	private numberOfPlays: number;
	private chart: Chart;

	constructor(){
		this.root = document.getElementById("game") as HTMLCanvasElement;
		this.dataSets = [];
		this.numberOfPlays = 0;
		this.genConfig();
	}

	private genConfig(): void {
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
	}

	addDataPoint(label: string, score: number){
		const i = this.chart.data.datasets.findIndex((e) => e.label == label);
		this.chart.data.datasets[i].data.push(score);
		this.chart.data.labels.push(++this.numberOfPlays)
		this.chart.update();
	}

	insertDataConfig(obj: DataConfig){
		this.dataSets.push(obj);
		this.numberOfPlays = obj.data.length
	}

	/*  Please insert dataconfig before **/
	createChart(){
		this.genConfig();
		Chart.register(...registerables);
		this.chart = new Chart(this.root, this.config)
	}
}

export default Graph;
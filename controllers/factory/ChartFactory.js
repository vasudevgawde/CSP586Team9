class ChartFactory{
	constructor(chartType){
		this._chartType = chartType;
	}
	loadChart(resultData, resultLabels, resultMax){
		let val;
		switch(this._chartType){
			case 'bar':
				val = new BarChart();
				break;
			case 'line':
				val = new LineChart();
				break;
			case 'pie':
				val = new PieChart();
				break;
			case 'doughnut':
				val = new DoughnutChart();
				break;
			case 'stack':
				val = new StackChart();
				break;
		}
		val.load(resultData, resultLabels, resultMax);
	}
}
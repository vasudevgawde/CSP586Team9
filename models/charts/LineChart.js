class LineChart extends ChartFactory{
		
	load(resultData, resultLabels, resultMax){
		let values = resultData.toString().split(",");
		let numValues = [];
		for(let i=0; i<values.length; i++){
			numValues.push(Number(values[i]));
		}
		var ctx = document.getElementById("myChart").getContext('2d');
		
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: resultLabels,//xaxis
				datasets: [{
					label: '#Number of ' + checkedColumns[0],
					data: numValues,//yaxis
					backgroundColor: "rgba(75,192,192,0.4)"
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true,	
							stepValue: 20,
							max: resultMax
						}
					}]
				}
			}
		});
	}
}
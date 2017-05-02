class PieChart extends ChartFactory{
	
	load(resultData, resultLabels, resultMax){
		let values = resultData.toString().split(",");
		let numValues = [];
		let bgColor = [];
		let borderColor = [];
		for(let i=0; i<values.length; i++){
			numValues.push(Number(values[i]));
			if(i%5 == 0){
				bgColor.push('rgba(255, 99, 132, 0.2)');
				borderColor.push('rgba(255, 99, 132, 1)');
			}
			else if(i%5 == 1){
				bgColor.push('rgba(54, 162, 235, 0.2)');
				borderColor.push('rgba(54, 162, 235, 1)');
			}
			else if(i%5 == 2){
				bgColor.push('rgba(153, 102, 255, 0.2)');
				borderColor.push('rgba(153, 102, 255, 1)');
			}
			else if(i%5 == 3){
				bgColor.push('rgba(75, 192, 192, 0.2)');
				borderColor.push('rgba(75, 192, 192, 1)');
			}
			else if(i%5 == 4){
				bgColor.push('rgba(255, 159, 64, 0.2)');
				borderColor.push('rgba(255, 159, 64, 1)');
			}
		}
		
		var ctx = document.getElementById("myChart");
		
		var myChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: resultLabels,//xaxis
				datasets: [{
					label: '#Number of ' + checkedColumns[0],
					data: numValues,//yaxis
					backgroundColor: bgColor,
					borderColor: borderColor,
				}]
			}
		});
	}
}
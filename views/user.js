let datasetType;
let rows = [];
let columns = [];
let checkedRows = [];
let checkedColumns = [];

//this function will add all the required scripts in the head tag	 
var loadScripts = () => {
	let scriptObj = new LoadScript();
	let scripts = scriptObj.load();

	for(let i=0; i<scripts.length; i++){
		let scriptTag = document.createElement('script');
		scriptTag.type = 'text/javascript';
		scriptTag.src = scripts[i];
		document.getElementsByTagName("head")[0].appendChild(scriptTag);
	}
}

var loadDataset = () => {
	datasetType = document.getElementById("selectDataset").value;
	
	let dataset = new DatasetFactory(datasetType);
	//load dataset in a table
	dataset.loadDataset();
}
	
function filterColumn(){
	let filter = new FilterFactory(datasetType, 'column');
	filter.filterDataset();
}




//this function will display the chart in html.
function loadChart()	
{
	
	
	checkedRows = [];
	let count = -1;
	for (i = 0; i < rows.length; i++) {
		let bool = false;
		for (j = 0; j < rows[i].length; j++) {
			if(document.getElementById(rows[i][j]+"rows").checked == true)
			{
				if(!bool)
				{
					count++;
					checkedRows[count] = new Array();
					bool = true;
				}
				checkedRows[count].push(rows[i][j]);
			}
		}
	}
	var DataFrame = dfjs.DataFrame;
	DataFrame.fromCSV('models/data/'+datasetType+'.csv').then(df => {
		DataFrame.sql.registerTable(df, 'tempTable', overwrite = true);
		let sqlString = 'SELECT ';
		let conditionString = '';
		for(let i=0;i<checkedColumns.length;i++)
		{
			let bool = true;
			sqlString = sqlString + checkedColumns[i];
			
			if(i != checkedColumns.length -1){
				sqlString = sqlString + ',';
			}
			if(checkedRows.length > 0)
			{
				for(let j=0;j<checkedRows[i].length;j++)
				{
					if(i > 0 && bool){
						conditionString = conditionString + ' AND ';
						bool = false;
					}
					conditionString = conditionString + checkedColumns[i] + " LIKE '" + checkedRows[i][j] + "'";
					if(j != checkedRows[i].length -1){
						conditionString = conditionString + ' OR ';
					}
				}
			}
		}
		sqlString = sqlString + ' FROM tempTable';
		if(conditionString != ''){
			sqlString = sqlString + ' WHERE ' + conditionString;
		}

		var filteredDataset = DataFrame.sql.request(sqlString).toArray();

		if(filteredDataset.length == 0)
		{
			window.alert("No rows selected");
		}

		var chartType =  document.getElementById("selectChart").value;
		var displaydata = df.select(checkedColumns[0]);
		
		var result;
		if(checkedRows.length > 0){
			
			for(let i=0; i<checkedRows[0].length; i++){
				if(i==0)
				{
					result = displaydata.filter(row => row.get(checkedColumns[0]) == checkedRows[0][i]).groupBy(checkedColumns[0]).aggregate(group => group.count());
				}
				else{
					result = result.union(displaydata.filter(row => row.get(checkedColumns[0]) == checkedRows[0][i]).groupBy(checkedColumns[0]).aggregate(group => group.count()));
				}
			}
		}
		else{
			result = displaydata.groupBy(checkedColumns[0]).aggregate(group => group.count());
		}
		
		
		var resultData = result.select('aggregation').toArray();
		var resultLabels = result.select(checkedColumns[0]).toArray();
		var resultMax = result.stat.max('aggregation')+10;
		let chart = new ChartFactory(chartType);
		chart.loadChart(resultData, resultLabels, resultMax);
		 
		divChart.style.border = "solid";
		divChart.style.borderWidth = "thin";
		
	});
}
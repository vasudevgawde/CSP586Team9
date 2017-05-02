class Row extends FilterFactory{
	filter(datasetType)
	{
		let DataFrame = new Dataset();

		DataFrame.fromCSV('models/data/'+datasetType+'.csv').then(df => {
			
			// Let's go to display convert our javascript object to an array.
			let datasetArray =  df.toArray();
		   
			//Let's go and get the list of columns in the dataset.
			columns = df.listColumns();

			//Build an array containing Customer records.
			//Create a HTML Table element.
			let table = document.createElement("TABLE");
			table.border = "1";

			//Get the count of columns.
			rows = [];
			checkedColumns = [];
			for(var i=0 ; i<columns.length ; i++){
				rows[i]= new Array();
				if(document.getElementById(columns[i]).checked == true)
				{
					checkedColumns.push(columns[i]);
					var distinctVal = df.distinct(columns[i]).toArray();
					for(var j=0;j<distinctVal.length;j++)
					{	
						rows[i].push(distinctVal[j]);
					}
				}
			}
					console.log(datasetType);
			var divRows = document.getElementById("divRows");
			console.log(divRows);
		   
			var returnStr = "";
			for (j = 0; j < rows.length; j++) {
				for (i = 0; i < rows[j].length; i++) {
					returnStr += '<input type="checkbox" id="' + rows[j][i] + 'rows"  name="theCheckboxrow" value="' + rows[j][i] + '" />' + rows[j][i];
				}
			}
			divRows.innerHTML = returnStr;
		});	
	}
}
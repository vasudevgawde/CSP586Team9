class EmployeeReimbursements extends DatasetFactory{

	loadTable(datasetType)
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
			let columnCount = datasetArray[0].length;
		 
			//Add the header row.
			let row = table.insertRow(-1);
			for (let i = 0; i < columnCount; i++) {
				let headerCell = document.createElement("TH");
				headerCell.innerHTML = columns[i];
				row.appendChild(headerCell);
			}

			//Add the data rows.
			for (let i = 0; i < datasetArray.length; i++) {
				row = table.insertRow(-1);
				for (let j = 0; j < columnCount; j++) {
					let cell = row.insertCell(-1);
					cell.innerHTML = datasetArray[i][j];
				}
			}
			
			let divTable = document.getElementById("divTable");
			divTable.innerHTML = "";
			divTable.appendChild(table);
			divTable.style.border = "solid";
			divTable.style.borderWidth = "thin";

			let divColumns = document.getElementById("divColumns");
		   
			let returnStr = "";
			for (let i = 0; i < columns.length; i++) {
				returnStr += '<input type="radio" id="' + columns[i] + '"  name="radio" value="' + columns[i] + '" />' + columns[i];
			}
			divColumns.innerHTML = returnStr;
		});	
	}
}
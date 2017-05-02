class DatasetFactory{
	constructor(datasetType){
		this._datasetType = datasetType;
	}
	
	loadDataset(){
		let val;
		switch(this._datasetType){
			case 'Contracts':
				val = new Contracts();
				break;
			case 'Payments':
				val = new Payments();
				break;
			case 'Employee_Reimbursements':
				val = new EmployeeReimbursements();
				break;
			case 'Employee_Indebtedness':
				val = new EmployeeIndebtedness();
				break;
			case 'Employee_Overtime':
				val = new EmployeeOvertime();
				break;
		}
		val.loadTable(this._datasetType);
	}
}
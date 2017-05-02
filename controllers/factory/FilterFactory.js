class FilterFactory{
	constructor(datasetType, filterType){
		this._datasetType = datasetType;
		this._filterType = filterType;
	}
	
	filterDataset(){
		let val;
		switch(this._filterType){
			case 'column':
				val = new Column();
				break;
			case 'row':
				val = new Row();
				break;
		}
		val.filter(this._datasetType);
	}
}
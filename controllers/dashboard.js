class LoadScript{
	constructor(){
		this._scripts = ['controllers/factory/DatasetFactory.js',
						 'controllers/factory/FilterFactory.js',
						 'controllers/factory/ChartFactory.js',
						 'controllers/Dataset.js',
						 'models/datasets/Contracts.js',
						 'models/datasets/Payments.js',
						 'models/datasets/EmployeeIndebtedness.js',
						 'models/datasets/EmployeeReimbursements.js',
						 'models/datasets/EmployeeOvertime.js',
						 'controllers/filter/Column.js',
						 'controllers/filter/Row.js',
						 'models/charts/BarChart.js',
						 'models/charts/LineChart.js',
						 'models/charts/PieChart.js',
						 'models/charts/DoughnutChart.js',
						 'models/charts/StackChart.js'];
	}
	load(){
		return this._scripts;
	}
}
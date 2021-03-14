
const XLSX = require('xlsx');
const fs = require('fs');

const result = XLSX.readFile('sample.xlsx',{sheetStubs: true});
 
console.log(result)
console.log(result.SheetNames);
console.log(result.SheetNames.length);

let data = []
if(result.SheetsNames.length > 0 {
	result.SheetNames.forEach(sheetName => {
		let results = XLSX.utils.sheet_to_json(result.Sheets[sheetName],{defval:""})
		if(results.length > 0) {
			let results.forEach(record =>{
				data.push(record);
			}
		}
	});
	await this.validateData(data)
} else {
	throw "No sheets found";
}

}

function validateData(data) {
	data.forEach(record =>{
		this.validateSchemaFields(record);
	})
}

function validateSchemaFields(record) {
		if(record.BrandName) {
		}
		else {
		throw ""
		}
}

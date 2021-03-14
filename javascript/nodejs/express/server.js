
const XLSX = require('xlsx');
const fs = require('fs');

const result = XLSX.readFile('sample.xlsx',{sheetStubs: true});
 
console.log(result)
console.log(result.SheetNames);
console.log(result.SheetNames.length);

let data = []
if(result.SheetNames.length > 0) {
	result.SheetNames.forEach(sheetName => {
		let results1 = XLSX.utils.sheet_to_json(result.Sheets[sheetName])
		let results2 = XLSX.utils.sheet_to_json(result.Sheets[sheetName],{header:1})
		// headers will pick up first column as headers
		// note: with out headers also it will work 
		let results = XLSX.utils.sheet_to_json(result.Sheets[sheetName],{range:1})
		// range parameters will give custom header 
		if(results.length > 0) {
			results.forEach(record =>{
				data.push(record);
			})
		}
	});
	// await this.validateData(data)
} else {
	throw "No sheets found";
}

console.log(data)


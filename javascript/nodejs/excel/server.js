
https://stackblitz.com/edit/exceljs-subheader-demo

const Excel = require('exceljs')

let workbook = new Excel.Workbook()

let worksheet = workbook.addWorksheet('Debtors')

let data= {"data": [{
	"stuff": [{
			"onetype": [{
					"id": 1,
					"name": "John Doe"
				},
				{
					"id": 2,
					"name": "Don Joeh"
				}
			]
		},
		{
			"othertype": [{
				"id": 2,
				"company": "ACME"
			}]
		}
	]
}, {
	"otherstuff": [{
		"thing": [
			[1, 42],
			[2, 2]
		]
	}]
}]
}


// Import stylesheets
import "./style.css";

const generateExcelBtn = document.querySelector("#generateExcelBtn");

generateExcelBtn.addEventListener("click", event => {
  import("exceljs").then(Excel => {
    console.log(Excel);

    const workbook = new Excel.Workbook();
    const sheet = workbook.addWorksheet("My Sheet");

    const header = ["Year", "Month", "Make", "Model", "Gender"];
    sheet.addRow(header);
    const subHeader = [];
    subHeader[5] = "Male";
    subHeader[6] = "Female";
    subHeader[7] = "Other";
    sheet.addRow(subHeader);
    sheet.mergeCells("E1:G1");
    sheet.addRow(["2020", "March", "Abc", "xyz", "", "Y"]);
    sheet.addRow(["2020", "March", "Abc", "xyz", "Y", ""]);
    sheet.addRow(["2020", "March", "Abc", "xyz", "", "", "Y"]);

    import("file-saver").then(fs => {
      console.log(fs);
      workbook.xlsx.writeBuffer().then(data => {
        let blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        fs.saveAs(blob, "Data.xlsx");
      });
    });
  });
});


const header = ["Year", "Month", "Make", "Model", "Gender"];
sheet.addRow(header);




workbook.xlsx.writeFile('Debtors.xlsx')


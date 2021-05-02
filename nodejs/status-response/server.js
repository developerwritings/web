import express from "express";
import fs from "fs";


var app = express();


app.get('/listUsers', function (req, res) {
    
//     res.download('report-12345.pdf');

// // res.download('/report-12345.pdf', 'report.pdf');

res.sendStatus(500).send("the serach file is not found")

})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })
var express = require("express")
var app = express();
var birthDay = require('./routes/birthday')
app.use('/birthDay',birthDay)

app.listen(3000,function() {
console.log("listening on port")
})
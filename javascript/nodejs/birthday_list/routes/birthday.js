var express = require('express')
var app = express.Router()
var services = require('../services/birthday.services');
app.get('/add',services.add);


module.exports = router
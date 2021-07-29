require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const router = require('../route/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true,
}))

app.use('/',router)

app.listen(port, function(request,response){
	console.log(`listen on ${port}`)
})
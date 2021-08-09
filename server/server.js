require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const port = process.env.PORT || 8000;
const router = require('../route/router');
const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router)

app.listen(port, function(request,response){
	console.log(`listen on ${port}`)
})
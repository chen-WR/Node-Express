const Pool = require('pg').Pool;

const pool = new Pool({
	user:'admin',
	host:'localhost',
	database:'restapi',
	password:'password',
	port:'5432'
});

module.exports = pool;

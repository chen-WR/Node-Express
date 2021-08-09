const express = require('express');
const router = express.Router();
const pool = require('../config/db.config');


// GET all users
router.get('/:table',function(request, response){
	const table = request.params.table
	const query = `SELECT * FROM ${table}`
	pool.query(query,(error, result)=>{
		if (error){
			throw error
		}
		response.status(200).json(result.rows)
	})
})

//GET single user
router.get('/:table/:id',function(request,response){
	const table = request.params.table
	const id = parseInt(request.params.id)
	const query = `SELECT * FROM ${table} where user_id=${id}`
	pool.query(query,(error,result)=>{
		if (error){
			throw error
		}
	response.status(200).json(result.rows)
	})
})

//POST Single user
router.post('/:table',function(request,response){
	const table = request.params.table
	const {username, password, firstname, lastname, age, email} = request.body
	const query = `INSERT INTO ${table} (username, password, firstname, lastname, age, email) VALUES ('${username}','${password}','${firstname}','${lastname}',${age},'${email}')`
	pool.query(query,(error,result)=>{
		if (error){
			throw error
		}
	response.status(201).send("User Added")
	})
})

//PUT Single user
router.put('/:table/:id',function(request,response){
	const table = request.params.table
	const id = parseInt(request.params.id)
	const {name,age} = request.body
	const query = `UPDATE ${table} SET name=${name},age=${age} WHERE id=${id}`
	pool.query(query,(error,result)=>{
		if (error) {
			throw error
		}
	response.status(200).send('User Updated')
	})	
})

//DELETE All users
router.delete('/:table',function(request,response){
	const table = request.params.table
	const query = `DELETE FROM ${table}`
	pool.query(query,(error,result)=>{
		if (error) {
			throw error
		}		
	})
	response.status(200).send("User Range Deleted")
})

//DELETE Single user
router.delete('/:table/:id',function(request,response){
	const table = request.params.table
	const id = parseInt(request.params.id)
	const query = `DELETE FROM users WHERE user_id=${id}`
	pool.query(query,(error,result)=>{
		if (error) {
			throw error
		}
	response.status(200).send('User Deleted')
	})
})

//DELETE Range users
router.delete('/:table/:start_id/:end_id',function(request,response){
	const table = request.params.table
	const start_id = parseInt(request.params.start_id)
	const end_id = parseInt(request.params.end_id)
	for (let i=start_id;i<end_id;i++) {
		const query = `DELETE FROM users WHERE id=${i}`
		pool.query(query,(error,result)=>{
			if (error) {
				throw error
			}		
		})
	}
	response.status(200).send("User Range Deleted")
})

//PATCH
router.patch('/',function(req,res){
	res.status(200).send('Put request received')
})

module.exports = router;

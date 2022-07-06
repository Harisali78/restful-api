const express = require('express');
const router = express.Router()
const {getTasks, createTasks, getTask, updateTask, deleteTask} = require('../controllers/controller')
router.post('/post', createTasks)
router.get('/getAll', getTasks)
//Get by ID Method
router.get('/getOne/:id', getTask)

//Update by ID Method
router.patch('/update/:id', updateTask)

//Delete by ID Method
router.delete('/delete/:id', deleteTask)

module.exports = router
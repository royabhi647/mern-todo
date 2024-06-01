const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/TaskController');

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/Addtask', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;
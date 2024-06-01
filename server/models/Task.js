const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, enum: ['Pending', 'InProgress', 'Completed'], default: 'Pending' },
    completedAt: Date
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

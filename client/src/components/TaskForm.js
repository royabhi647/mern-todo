import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/todo/Addtask', { title, description });
        onAdd(response.data);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
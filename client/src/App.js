import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/todo/tasks');
        setTasks(response.data);
    };

    useEffect(() => {   
        fetchTasks();
    }, []);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const handleUpdateTask = (updatedTask) => {
        setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
    };

    const handleDelete = async (taskId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/todo/delete/${taskId}`)
            fetchTasks()
            alert(response.data.message);
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="container">
            <h2>To-Do List Application</h2>
            <TaskForm onAdd={handleAddTask} />
            <div className="section">
                <TaskList tasks={tasks} status="Pending" onUpdate={handleUpdateTask} />
                <TaskList tasks={tasks} status="InProgress" onUpdate={handleUpdateTask} />
                <TaskList tasks={tasks} status="Completed" onUpdate={handleUpdateTask} onDelete={handleDelete}/>
            </div>
        </div>
    );
};

export default App;
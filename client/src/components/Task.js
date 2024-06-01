import React from 'react';
import axios from 'axios';
import "../App.css";

const Task = ({ task, onUpdate, onDelete }) => {
    const handleMove = async () => {
        let newStatus;
        if (task.status === 'Pending') {
            newStatus = 'InProgress';
        } else if (task.status === 'InProgress') {
            newStatus = 'Completed';
        }
        const response = await axios.put(`http://localhost:5000/todo/tasks/${task._id}`, { status: newStatus });
        onUpdate(response.data);
    };

    const handleDelete = () => {
        onDelete(task._id);
    }

    return (
        <li>
            <div>
                <strong className='title'>{task.title}</strong>
                <p className='description'>{task.description}</p>
            </div>
            <div className='button-container'>
                <button
                    onClick={task.status === 'Completed' ? handleDelete : handleMove}
                    style={{
                        backgroundColor: task.status === 'Pending'
                            ? '#478ECC'
                            : task.status === 'InProgress'
                                ? '#8AC44B'
                                : task.status === 'Completed'
                                    ? '#bb2124'
                                    : ''
                    }}
                    className='btn-status'
                >
                    {task.status === 'Pending'
                        ? 'Move In Progress'
                        : task.status === 'InProgress'
                            ? 'Move to Completed'
                            : task.status === 'Completed'
                                ? 'Remove'
                                : ''}
                </button>
                {task.status === "Completed" && (
                    <div className='completed-date'>
                        <strong>Completed on:</strong>
                        <p>{new Date(task.completedAt).toLocaleString()}</p>
                    </div>
                )}
            </div>
        </li>
    );
};

export default Task;
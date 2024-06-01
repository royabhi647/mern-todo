import React from 'react';
import Task from './Task';
import "../App.css";

const TaskList = ({ tasks, status, onUpdate, onDelete }) => {

    const getBackgroundColor = () => {
        if (status === "Pending") {
            return "#666";
        } else if (status === "InProgress") {
            return "pink";
        } else if (status === "Completed") {
            return "#22bb33";
        }
    };

    return (
        <div style={{ background: getBackgroundColor(), marginRight: status === "Completed" ? "0px" : "10px" }} className='taskContainer'>
            <h3 style={{textAlign:"center", color:"#fff"}}>{status}</h3>
            <ul>
                {tasks.filter(task => task.status === status).map(task => (
                    <Task key={task._id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
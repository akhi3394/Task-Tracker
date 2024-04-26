// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        className="task-input"
        placeholder="Enter task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button className="add-btn" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;

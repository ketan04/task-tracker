// components/TaskItem.js
import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      {/* Add edit and delete options here */}
    </div>
  );
};

export default TaskItem;

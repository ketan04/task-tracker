// components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

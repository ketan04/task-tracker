// components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [id, setId]  = useState('');
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('new');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, dueDate, status });
    setTitle('');
    setDueDate('');
    setStatus('new');
  };

  return (
    <div>
      <h2>{id ? 'Update Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" required />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="new">New</option>
          <option value="in-progress">New</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">{id ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;

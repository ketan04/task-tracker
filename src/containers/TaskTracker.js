// components/TaskTracker.js
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import taskService from '../services/TaskService';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await taskService.fetchTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    if(task.id){
        task = await taskService.saveTask(task)
    }else{
        task = await taskService.updateTask(task.id, task)
    }
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskTracker;

// services/taskService.js
import apiConfig from '../config/apiConfig';

const taskService = {
  fetchTasks: async () => {
    const response = await fetch(`${apiConfig.API_URL}`);
    const data = await response.json();
    return data;
  },
  saveTask: async (task) => {
    const response = await fetch(`${apiConfig.API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
  },
  updateTask :async (taskId, task) => {
    try {
      const response = await fetch(`${apiConfig.API_URL}/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error('Failed to update task');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },
};

export default taskService;

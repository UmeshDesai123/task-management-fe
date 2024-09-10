import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../App';
import { toast } from 'react-toastify';

const CreateTask = ({ taskList, setTaskLIst }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/tasks`, { title, description });
      setTaskLIst([...taskList, response.data]);
      toast.success('Task created sucessfully!');
      setTitle('');
      setDescription('');
    } catch (error) {
      toast.error('Error creating task');
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Task</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;

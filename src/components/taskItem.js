import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../App';
import { toast } from 'react-toastify';

const TaskItem = ({ task, taskList, setTaskList }) => {
  const [taskStatus, setTaskStatus] = useState(task.status);
  const updateStatus = async (newStatus) => {
    try {
      const updatedTask = { id: task._id, status: newStatus };
      await axios.put(`${API_BASE_URL}/tasks`, updatedTask);
      const updatedTasksList = taskList.map(tk =>
        tk._id === task._id ? { ...task, status: newStatus } : task
      );
      setTaskList(updatedTasksList);
      setTaskStatus(newStatus);
      toast.success('Status updated!')
    } catch (error) {
      toast.error('Error updating status');
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="task-item">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p className={taskStatus === 'completed' ? 'status-completed' : 'status-pending'}>
          Status: {taskStatus}
        </p>
      </div>
      <div className="status-buttons">
        <button onClick={() => updateStatus('completed')} disabled={taskStatus === 'completed'}>
          Mark as Completed
        </button>
        <button onClick={() => updateStatus('pending')} disabled={taskStatus === 'pending'}>
          Mark as Pending
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

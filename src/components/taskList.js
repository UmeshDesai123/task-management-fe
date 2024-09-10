import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './taskItem';
import { API_BASE_URL } from '../App';

const TaskList = ({taskList, setTaskList = ()=>{}}) => {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      {taskList.map((task) => (
        <TaskItem key={task._id} task={task} taskList={taskList} setTaskList={setTaskList} />
      ))}
    </div>
  );
};

export default TaskList;

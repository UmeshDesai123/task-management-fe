import { useEffect, useState } from 'react';
import './App.css';
import CreateTask from './components/createTask';
import TaskList from './components/taskList';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const API_BASE_URL = 'http://localhost:8001';

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        setTaskList(response.data);
        toast.success('Fetched all tasks');
      } catch (error) {
        toast.error('Error fetching tasks');
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      <div className="App">
        <CreateTask taskList={taskList} setTaskLIst={setTaskList} />
        <TaskList taskList={taskList} setTaskLIst={setTaskList} />
        <ToastContainer />
      </div>
      
    </>
  );
}

export default App;

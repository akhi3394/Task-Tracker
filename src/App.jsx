// App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './tasklist';
import TaskForm from './taskform';
import TaskFilter from './taskfilter';
import './style.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');



  useEffect(() => {
    // Fetch tasks from the API
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      setTasks(response.data.slice(0, 5)); // Limit to 5 tasks for simplicity
    });
  }, []);
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; // for 'all'
  });

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='container'>
    <h1>Task Tracker</h1>
    <TaskForm onAddTask={addTask} />
    <TaskFilter onFilterChange={handleFilterChange} />
    <TaskList
      tasks={filteredTasks}
      onDelete={deleteTask}
      onToggleComplete={toggleComplete}
    />
  </div>
  );
};

export default App;

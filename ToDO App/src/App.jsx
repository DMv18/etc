import { useState } from 'react'
import TaskForm from './components/TaskForm'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task,i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="App">
        <h1> ToDo App</h1>
        <TaskForm onAddTask={addTask} />
        <ul>
          {tasks.map((task,index)=>
            <li key={index} style={{marginBottom: '10px'}}>
              <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '10px', marginRight: '10px' }}>
                <strong>{task.title}</strong>: {task.description}
              </span>
              
              <button onClick={() => deleteTask(index)}>🗑️</button>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App;

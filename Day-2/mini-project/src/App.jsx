import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Student Task Tracker</h1>
        <p className="task-count">
          {tasks.length === 0
            ? "No tasks yet. Start by adding one!"
            : `You have ${tasks.length} task${tasks.length === 1 ? "" : "s"} remaining`}
        </p>
      </header>

      <main>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} />
      </main>
    </div>
  );
}

export default App

import { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [taskInput, setTaskInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskInput.trim()) {
            onAdd(taskInput);
            setTaskInput("");
        }
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button type="submit" disabled={!taskInput.trim()}>
                Add Task
            </button>
        </form>
    )
}

export default TaskForm;
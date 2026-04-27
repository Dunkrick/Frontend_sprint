const TaskItem = ({ task, onDelete }) => {
    return (
        <li className="task-item">
            <span className="task-text">{task.text}</span>
            <button 
                className="delete-btn" 
                onClick={() => onDelete(task.id)}
                aria-label="Delete task"
            >
                &times;
            </button>
        </li>
    );
};

export default TaskItem;

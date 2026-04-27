import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>No tasks yet. Enjoy your free time! ☕</p>
            </div>
        );
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TaskList;

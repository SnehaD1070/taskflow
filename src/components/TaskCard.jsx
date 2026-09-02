import React from 'react';

const TaskCard = ({task, onDelete}) => {
  return (
    <div>
      <h3>{task.title}</h3>

            <p>
                Status: {task.completed ? "Completed" : "Pending"}
            </p>
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
    </div>
  );
}

export default TaskCard;

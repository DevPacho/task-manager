import React from 'react';
import '../styles/task.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Task({ id, text, isCompleted, completeTask, deleteTask }) {
  return(
    <div className={isCompleted ? "task-container task-completed" : "task-container"}>
      <div
        className="task-text"
        onClick={() => completeTask(id)}>
        {text}
      </div>

      <div
        className="task-icons-container"
        onClick={() => deleteTask(id)}>

        <AiOutlineCloseCircle
          className="equis-delete-task-icon"
          title="Delete task"/>
      </div>
    </div>
  )
}

export default Task;

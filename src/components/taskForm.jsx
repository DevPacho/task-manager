import React, { useState } from 'react';
import '../styles/taskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ onSubmit }) {

  const [input, setInput] = useState("");

  const changesHandler = evnt => {
    setInput(evnt.target.value)
  }

  const attemptToSendTask = evnt => {

    /* So that the page is not reloaded every
    time the add task button is pressed. */
    evnt.preventDefault()

    const newTask = {
      id: uuidv4(),
      text: input,
      isCompleted: false,
    }

    onSubmit(newTask)

  }

  return(
    <form
      className="form-task"
      onSubmit={attemptToSendTask}>
      <input
        className="input-task-field"
        type="text"
        placeholder="Enter your task!"
        name="text"
        onChange={changesHandler}
      />

      <button className="add-task-button">Add task</button>

    </form>
  )
}

export default TaskForm;

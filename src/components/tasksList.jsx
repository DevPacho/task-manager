import React, { useState } from 'react';
import TaskForm from './taskForm';
import '../styles/tasksList.css';
import Task from './task';

function TasksList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim()

      const updatedTasks = [task, ...tasks]
      setTasks(updatedTasks)
    }
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return(
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="list-tasks-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              isCompleted={task.isCompleted}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </>
  )
}

export default TasksList;

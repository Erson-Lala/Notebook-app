import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TaskForm from './TaskForm'
import Task from './Task'

import { useSelector, useDispatch } from 'react-redux'

function TaskList() {

  const todos = useSelector(state=>state.todos)
  const dispatch = useDispatch()  
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    dispatch({type:"ADD_TODO", todo}) 
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    dispatch({type:"UPDATE_TODO", todoId, newValue}) 
  }

  const removeTodo = (todoId) => { 
    dispatch({type:"REMOVE_TODO", todoId}) 
  }

  const completeTodo = (todoId) => { 
    dispatch({type:"COMPLETE_TODO", todoId}) 
  } 
  return (
    <div className="todo-app">
      {/* <span className="text">Welcome</span> */}
      <h1>Add a task you want to achieve !</h1>
      <TaskForm onSubmit={addTodo} />
      <Task
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <span className="note-link">
        <Link to="/note" className="todo-link">
          Search Note
        </Link>
      </span>
    </div>
  )
}

export default TaskList

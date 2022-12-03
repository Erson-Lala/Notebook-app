import React, { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [todoList, setTodo] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  useEffect(()=>{
    setTodo(todos)
  },[todos])
  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />
  }

  return todoList.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <MdDelete onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <MdEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ))
}

export default Todo

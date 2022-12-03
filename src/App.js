import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import TodoList from './components/TaskList'
import Note from './components/Note/index'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<TodoList />} />
        <Route path="/note" element={<Note />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

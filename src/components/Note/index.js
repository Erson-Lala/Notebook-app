import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import NoteSearchForm from './NoteSearchForm'
import NoteItem from './NoteItem'
import CategoryItem from './CategoryItem'
import CategoryModal from './CategoryModal'

import './index.css'

function Note() {

  const {todos,categories, category, key} = useSelector(state=>state) 
  const dispatch = useDispatch()  

  const [mounted, setMount] = useState(false)
  const [currentItem, setCurrentItem] = useState({}) 
  useEffect(()=>{
    setMount(true)
  },[])
  const onSearch = (key) => {
    dispatch({type:"SET_KEY", key})
  }
  const onSelect = (data) => {
    setCurrentItem(data)
  }
  const onCategorySubmit = (c) => {
    if (!categories.find((ct) => c === ct)) {
      dispatch({type:"ADD_CATEGORY", category:c})
    }
      dispatch({type:"ADD_TO_CATEGORY", todo:currentItem, category:c}) 
      setCurrentItem({})
  }
  const onRemoveFromCategory = (data) => {    
      dispatch({type:"REMOVE_FROM_CATEGORY", todo:data})
      setCurrentItem({})
  }

  const onCategoryChange = (e) => {
    dispatch({type:"SET_CATEGORY", category:e.target.value})
  }

  return (
    <div>
      {mounted ? (
        <div className="container">
          <Link to="/" className="btn btn-light">
            &lt; Back
          </Link>

          <div className="row">
            <div className="col-3">
              <NoteSearchForm onSearch={onSearch} />
              <h2 className="note-subtitle">All Notes</h2>
              <div className="list-group">
                {todos.filter(
                    (n) =>
                      n.text.toString().toLowerCase().includes(key.toLowerCase()),
                  ).map((n, index) => (
                  <NoteItem data={n} key={index} onSelect={onSelect} />
                ))}
              </div>
            </div>
            <div className="col-6">
              <div className="note-title">My Note</div>
              <div className="mb-3 row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Category -
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-select"
                    onChange={onCategoryChange}
                    value={category}
                  >
                    <option selected value="">
                      -
                    </option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="list-group">
                {todos.filter((fi) => category?fi.category === category:fi.category).map((n, index) => (
                  <CategoryItem
                    data={n}
                    key={index}
                    onRemoveFromCategory={onRemoveFromCategory}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        'Loading'
      )}
      <CategoryModal categories={categories} onSubmit={onCategorySubmit} />
    </div>
  )
}

export default Note

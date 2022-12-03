import React, { useState } from 'react'

const NoteSearchForm = (props) => {
  const [keyword, setKeyword] = useState('')

  const onSearch = () => {
    if (props.onSearch) {
      props.onSearch(keyword)
    }
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder=""
        onChange={(e) => {
          setKeyword(e.target.value)
        }}
      />
      <button className="btn btn-success" onClick={onSearch} type="button">
        Search
      </button>
    </div>
  )
}

export default NoteSearchForm

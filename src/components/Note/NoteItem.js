import React from 'react'
import './NoteItem.css'
const NoteItem = (props) => {
  const { data } = props
  const onSelect = (data) => {
    if (props.onSelect) {
      props.onSelect(data)
    }
  }
  return (
    <a href="#" className="list-group-item info mb-2" aria-current="true">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{data.text}</h5>
        {/*<small>3 days ago</small>*/}
        <small>
          <button
            data-bs-toggle="modal"
            data-bs-target="#categoryModal"
            data-bs-whatever="@mdo"
            className="btn btn-sm btn-success"
            onClick={() => onSelect(data)}
          >
            >> Add to Category
          </button>
        </small>
      </div>
      {/*<p className="mb-1">{data.desc}</p>*/}
      {/*<small>And some small print.</small>*/}
    </a>
  )
}

export default NoteItem

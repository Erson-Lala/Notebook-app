import React, { useState } from "react";

const CategoryModal =  (props)=>{
  const [category, setCategory ] = useState("")
  const [isNew, setIsNew] = useState(false)
  const {categories} = props;
  const onCategoryChange = e =>{
    if(e.target.value)
    setCategory(e.target.value)
  }
  const onCheck = (e) =>{
    setIsNew(e.target.checked)
    setCategory("")
  }
  const onSubmit = e=>{
    if(props.onSubmit){
      props.onSubmit(category);
    }
  }
  const onChange = e =>{
    setCategory(e.target.value)
  }
return (
<div className="modal fade" id="categoryModal" aria-labelledby="exampleModalLabel" tabIndex="-1"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h2 className="modal-title fs-5" id="exampleModalLabel">Add to Category</h2>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>  
          <div className="mb-3">
            <label htmlFor="categories" className="col-form-label">Categories:</label>
            <select {...{"disabled": isNew }} className="form-select" onChange={onCategoryChange} value={category}>
              <option selected>-</option>
              {categories.map(c=><option key={c} value={c}>{c}</option>)} 
            </select>
        </div>
        <div className="form-check">
            <input className="form-check-input" onChange={onCheck} type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Add New Category
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">New Category:</label>
            <input  {...{"disabled": !isNew }} onChange={onChange} type="text" className="form-control" id="category-name" />
          </div>
         
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={onSubmit} data-bs-dismiss="modal" type="button" className="btn btn-success">Add to Category</button>
      </div>
    </div>
  </div>
</div>);
}

export default CategoryModal;
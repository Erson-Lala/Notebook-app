import React from "react"
import "./CategoryItem.css"

const CategoryItem =  (props)=>{
	const {data} = props
	const onRemoveFromCategory = (data)=>{
		if(props.onRemoveFromCategory){
			props.onRemoveFromCategory(data);
		}
	} 
	return (
		 <a className="list-group-item success mb-2" aria-current="true">
		    <div className="d-flex w-100 justify-content-between">
		      <h5 className="mb-1">{data.text}</h5>
			<small>
				<button className="btn btn-sm btn-danger" onClick={()=>onRemoveFromCategory(data)} > >> Remove From Category</button>
		      </small>
		      {/*<small>3 days ago</small>*/}
		    </div>
		   {/* <p className="mb-1">{data.desc}</p>*/}
		    <small>Category:{data.category}</small>
		  </a>  
		);
}

export default CategoryItem;
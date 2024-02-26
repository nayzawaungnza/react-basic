import React, { useState } from 'react'
import './index.css';
export default function PostForm() {
  let [title, setTitle] = useState("");
  // let onChangeHandler = (e) =>{
  //   setTitle(e.target.value);
  // }
  let resetForm = () =>{
    setTitle('');
    console.log('update successfully');
  }
  return (
    <div className='post-form-components'>
      <h3>Create Post</h3>
        <form className='post-form'>
        <div className='form-group'>
            <label >Title</label>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className='form-control' value={title} />
            <p>{title}</p>
            <button type='button' onClick={resetForm}>Reset Form</button>
        </div>
        <div className='form-group'>
            <button className='form-control'>Post Now</button>
        </div>
        </form>
    </div>
  )
}

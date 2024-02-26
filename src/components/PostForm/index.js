import React, { useState } from 'react'
import './index.css';
export default function PostForm({addPost}) {
  
  let [title, setTitle] = useState("");
  let [status, setStatus] = useState("upcoming");
  // let onChangeHandler = (e) =>{
  //   setTitle(e.target.value);
  // }
  let resetForm = () =>{
    setTitle('');
    console.log('update successfully');
  }
  let insertPost = (e) =>{
    e.preventDefault();
    console.log('hi');

    let post = {
      id : Math.floor(Math.random()*10000),
      title: title,
      status: status,
    }
    resetForm();
    console.log(post);
    addPost(post);
  }
  return (
    <div className='post-form-components'>
      <h3>Create Post</h3>
        <form className='post-form' onSubmit={insertPost}>
        <div className='form-group'>
            <label >Title</label>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} className='form-control' value={title} />
        </div>

        <div className='form-group'>
            <label >Status</label>
            <select value={status} onChange={(e)=>{setStatus(e.target.value)}}  className='form-control'>
              <option value="dropped">Dropped</option>
              <option value="ongoing">Ongoing</option>
              <option value="upcoming">Upcoming</option>
            </select>
        </div>

        <div className='form-group'>
            <button className='form-control' type='submit'>Post Now</button>
        </div>
        </form>
    </div>
  )
}

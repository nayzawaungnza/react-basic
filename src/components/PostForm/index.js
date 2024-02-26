import React, { useRef, useState } from 'react'
import './index.css';
export default function PostForm({addPost}) {

  let titleRef = useRef('');

  //let [title, setTitle] = useState("");
  // let onChangeHandler = (e) =>{
  //   setTitle(e.target.value);
  // }
  let resetForm = () =>{
    //setTitle('');
    titleRef.current.value = '';
    console.log('update successfully');
  }
  let insertPost = (e) =>{
    e.preventDefault();
    //console.log(titleRef);
    let post = {
      id : Math.floor(Math.random()*10000),
      title: titleRef.current.value,
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
            <input type="text"  className='form-control' ref={titleRef} />
        </div>
        <div className='form-group'>
            <button className='form-control' type='submit'>Post Now</button>
        </div>
        </form>
    </div>
  )
}

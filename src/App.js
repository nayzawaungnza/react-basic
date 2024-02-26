import logo from './logo.svg';
import './App.css';
import image from './assets/recent-project-1.png';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostList from './components/PostsList/index';
import PostForm from './components/PostForm/index'
import Modal from './components/Modal/index'
function App() {

  let [showModal, setshowModal] = useState(false);

  let [posts, setPosts] = useState([
    {
      id:1, 
      title:'First Post',
      status:'dropped',
    },
    {
      id:2, 
      title:'Second Post',
      status:'ongoing',
    },
    // {
    //   id:3, 
    //   title:'Third Post',
    // }
  ]);
 
  let addPost = (post) =>{
    setPosts((prevState => [...prevState, post]));
    setshowModal(false);
  }
  return (
    <>
      <Navbar setshowModal={setshowModal}/>
      <PostList posts={posts}/>
      {showModal && <Modal setshowModal={setshowModal}>
        {/* that is call slot */}
            <PostForm addPost={addPost}></PostForm>
            
      </Modal>}
    </>
    
  );
}

export default App;

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
    },
    {
      id:2, 
      title:'Second Post',
    },
    {
      id:3, 
      title:'Third Post',
    }
  ]);
 
  return (
    <>
      <Navbar setshowModal={setshowModal}/>
      <PostList posts={posts}/>
      {showModal && <Modal danger setshowModal={setshowModal}>
        {/* that is call slot */}
            <PostForm></PostForm>
            
      </Modal>}
    </>
    
  );
}

export default App;

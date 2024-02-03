import logo from './logo.svg';
import './App.css';
import image from './assets/recent-project-1.png';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostList from './components/PostsList/index';
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
      {showModal && <Modal>
        {/* that is call slot */}
            <h1>Zoom Class is available now</h1>
            <p>feel free to <a href="">Join</a> here</p>
            <button onClick={()=>setshowModal(false)}>close</button>
      </Modal>}
    </>
    
  );
}

export default App;

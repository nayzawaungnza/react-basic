import logo from './logo.svg';
import './App.css';
import image from './assets/recent-project-1.png';
import { useState } from 'react';
function App() {

  let [name, setName] = useState("Nay Zaw Aung");
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
  let changeName = () =>{
    setName('Aung Aung');
  }

  let deletePost = (id) => {
    setPosts((prevPost)=>prevPost.filter(post => post.id != id))
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* absolute path */}
      {/* <img src="http://localhost:3000/recent-project-1.png" /> */}

      {/* relative path */}
      {/* <img src="/recent-project-1.png" /> */}

      {/* 2 nd way */}

      {/* <img src={image} /> */}

        <p>
          Hello {name}
        </p>
        <button onClick={changeName}>Change Name</button>

        <ul>
          {!!posts.length && posts.map((post)=>(// !! is get bollean value
            <li key={post.id}>
              {post.title}
              <button onClick={() => deletePost(post.id)}>delete</button>
            </li>
          ))}
          {!posts.length && <p>No posts available.</p>}
        </ul>
      </header>
 
    </div>
  );
}

export default App;

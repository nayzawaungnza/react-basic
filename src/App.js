import logo from './logo.svg';
import './App.css';
import image from './assets/recent-project-1.png';
import { useState } from 'react';
function App() {

  let [name, setName] = useState("Nay Zaw Aung");
  let changeName = () =>{
    setName('Aung Aung');
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
      </header>
 
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import CompShowBlogs from './blog/ShowBlogs.js';
import CompCreateBlog from './blog/CreateBlog.js';
import CompEditBlog from './blog/EditBlog.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button ClassName="btn btn-primary">CREAR</button>
        <button ClassName="btn btn-primary"><i className="fa-brands fa-react"></i></button>


      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs/>}/>
          <Route path='/create' element={<CompCreateBlog/>}/>
          <Route path='/edit/:id' element={<CompEditBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

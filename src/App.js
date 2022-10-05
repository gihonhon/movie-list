import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import './App.css';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>


    </div>
  );
}

export default App;

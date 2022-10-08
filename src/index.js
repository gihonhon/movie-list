import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/footer';
import NavBar from './component/Navbar/navbar';
import Search from './component/Search/search';
import './index.css'
import Detail from './page/Detail/detail';
import Home from './page/Home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movie/:id' element={<Detail/>}></Route>
      <Route path='/search/:que' element={<Search/>}></Route>
      <Route path='/search/:category' element={<Search/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


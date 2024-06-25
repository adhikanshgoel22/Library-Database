import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import AddBook from './Pages/Librarian/Add';
import SearchBar from './Pages/User/SearchBar';
import User from './Pages/User/User';
import Librarian from './Pages/Librarian/Librarian';
import AdminDb from './Pages/Librarian/AdminDb';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route path="login" element={<Login/>}/>
  {/* <Route path="login" element={Login}/> */}
  <Route path="/" element={<Home/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="add" element={<AddBook/>}/>
  <Route path="user" element={<User/>}/>
  <Route path="librarian" element={<Librarian/>}/>
  <Route path="admindb" element={<AdminDb/>}/>

 </Routes>
 </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login3d from './components/login';
import Login from './components/loginpage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='login3d' element={<Login3d/>}/>
      <Route path='loginpage' element={<Login/>}/>

     


    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
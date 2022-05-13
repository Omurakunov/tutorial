import React from 'react';
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import Home from './contents/home';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Saved from './contents/saved';
import Profile from './contents/profile';
import Settings from './contents/settings';
import CoursePage from './contents/coursePage';
const root = createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/saved' element={<Saved/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/profile/settings' element={<Settings/>}></Route>
      <Route exact path='/coursepage' element={<CoursePage/>}></Route>
    </Routes>
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

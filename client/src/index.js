import React from 'react';
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css';
import Home from './pages/home';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Saved from './pages/saved';
import Profile from './pages/profile';
import CoursePage from './pages/course-page';
import LessonsPage from './pages/lessons-page';
import Registration from './authentification/registration';
import Login from './authentification/login';
import PrivateRoute from './contents/private-route';
import ProfileDataReg from "./authentification/profile-data-reg";
const root = createRoot(document.getElementById('root'))

root.render(
    <Router>
    <Routes>
      <Route exact path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
      <Route exact path='/saved' element={<PrivateRoute><Saved/></PrivateRoute>}/>
      <Route exact path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route exact path='/course:id' element={<PrivateRoute><CoursePage/></PrivateRoute>}></Route>
      <Route exact path='/course-:param/lesson-:id' element={<PrivateRoute><LessonsPage/></PrivateRoute>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/registration' element={<Registration/>}></Route>
      <Route exact path='/registration/user-info' element={<ProfileDataReg/>}></Route>
    </Routes>
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

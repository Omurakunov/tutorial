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
import LessonsPage from './contents/lessonsPage';
import Registration from './contents/Authentification/registration';
import Login from './contents/Authentification/login';
import PrivateRoute from './contents/PrivateRoute';
const root = createRoot(document.getElementById('root'))
root.render(
    <Router>
    <Routes>
      <Route exact path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
      <Route exact path='/saved' element={<PrivateRoute><Saved/></PrivateRoute>}/>
      <Route exact path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
      <Route exact path='/profile/settings' element={<PrivateRoute><Settings/></PrivateRoute>}></Route>
      <Route exact path='/course:id' element={<PrivateRoute><CoursePage/></PrivateRoute>}></Route>
      <Route exact path='/coursepage/lesson:id' element={<PrivateRoute><LessonsPage/></PrivateRoute>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/registration' element={<Registration/>}></Route>
    </Routes>
  </Router>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

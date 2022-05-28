import Navbar from "./navbar"
import { useEffect, useState} from 'react'
import {  faHeart,faChildren, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import axios from 'axios'
import CourseCards from "./courseCards";
import config from './configs';
function Saved() {

  library.add(
    faHeart,
    faChildren, faThumbsUp
  )
  
  const [savedCourses, setSavedCourses] = useState([])

  useEffect(()=>{
    axios.get(`${config.Url}/ `).then(res=>{setSavedCourses(res.data)})
  })
  
    return(
      <>
        <Navbar/>
        <div className="page-container">
          <h1>Favorites:</h1>
          {/* <CourseCards courses={savedCourses}/> */}
        </div>
        </>
        
    )
}
export default Saved
import Navbar from "./navbar"
import { useEffect, useState} from 'react'
import {  faHeart,faChildren, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import axios from 'axios'
import SavedCourseCards from "./savedCourseCards";
import config from './configs';
function Saved() {

  library.add(
    faHeart,
    faChildren, faThumbsUp
  )
  
  const [savedCourses, setSavedCourses] = useState([])

  const savedReq = () =>{
    axios.get(`${config.Url}/course/savedlist `,{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
    .then(res=>{setSavedCourses(res.data)})
  }

  useEffect(()=>{
    savedReq()
  },[])

 console.log(savedCourses)
    return(
      <>
        <Navbar/>
        <div className="page-container">
          <h1>Favorites:</h1>
          <SavedCourseCards courses={savedCourses}/>
        </div>
        </>
        
    )
}
export default Saved
import Navbar from "./navbar"
import { useEffect, useState} from 'react'
import {  faHeart,faChildren, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import axios from 'axios'
import CourseCards from "./courseCards";
function Saved() {

  library.add(
    faHeart,
    faChildren, faThumbsUp
  )
  
  const [savedCourses, setSavedCourses] = useState(new Array(7).fill('').map((_, i)=>(
    {
      id: i,
      img:"https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/Banner-10.png",
      name:`Phyton ${i}`,
      views:282,
      likes:151,
      lessons:29
      
    }
  )))

  // useEffect(()=>{
  //   axios.get('').then(res=>{setSavedCourses(res.data)})
  // })
  
    return(
      <>
        <Navbar/>
        <div className="page-container">
          <h1>Favorites:</h1>
          <CourseCards courses={savedCourses}/>
        </div>
        </>
        
    )
}
export default Saved
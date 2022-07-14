import Navbar from "../contents/navbar"
import { useEffect, useState} from 'react'
import {  faHeart,faChildren, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios'
import SavedCourseCards from "../contents/saved-course-cards";
import config from '../configs/configs';
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
      <body>
        <Navbar/>
        <div className="page-container">
          <h1>Favorites:</h1>
          <SavedCourseCards courses={savedCourses}/>
        </div>
        </body>
        
    )
}
export default Saved
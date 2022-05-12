import Navbar from "./navbar"
import { useEffect, useState} from 'react'
import {  faHeart,faChildren, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import axios from 'axios'
function Saved() {

  library.add(
    faHeart,
    faChildren, faThumbsUp
  )
  
  const [savedCourses, setSavedCourses] = useState(new Array(7).fill('').map((_, i)=>(
    {
      id: i,
      img:"https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png",
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
          <div className="cards-container">
          {
            savedCourses.map((course, i)=>(
              <div className='course-card' key={i}>
                <div className='course-card-img'>
                  <img src={course.img} alt="Oops"/>
                </div>
                
                <div className='course-card-info'>
                  <h3>{course.name}</h3>
                  <div className='course-card-info-rating'>
                    <div>
                      <FontAwesomeIcon icon={faChildren}></FontAwesomeIcon>
                      <p>{`${course.views} просмотров`}</p>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                      <p>{`${course.likes} лайокв`}</p>
                    </div>
                  </div>
                  <p>{`${course.lessons} уроков`}</p>
                </div>
                <button><FontAwesomeIcon icon={faHeart} size="3x" color="rgba(254, 121, 61, 1)"></FontAwesomeIcon></button>
                
              </div>
            ))
          }
          </div>
        </div>
        </>
        
    )
}
export default Saved
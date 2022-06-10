import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useParams, Navigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import config  from './configs';

function LessonsPage(props) {
  library.add(
    faArrowRight, faArrowLeft
  )
  const params = useParams()
  const [lesson, setLesson] = useState()
  const token = localStorage.getItem('jwt')


  const lessonReq = () =>{
    axios
    .get(`${config.Url}/lesson/lesson-list/${params.id}`,{headers:{'Authorization' : `Token ${token}`}})
    .then(res=>{setLesson(res.data)})
  }

  useEffect(()=>{
    lessonReq()
  },[])

  // const handleClick = () =>{
  //   <Navigate replace to={}></Navigate>
  // }

  return(
    <>
    <Navbar/>
    <div className="lessons-page">
      
      <div className='lessons-page-video'>
        <div>
           <video width="1000" height="auto" controls src={lesson?.videos[0]?.video} type="video/mp4" > </video>
        </div>
        <div className='buttons'>
          {/* <button id='previous' onClick={handleClick()}>Back to courses</button> */}
          
        </div>
        
      </div>
      <div className='lessons-page-theory'>
        <p>
         {
           lesson?.description
         }
        </p>
      </div>
      
    </div>
    
    </>
    
  )
}
export default LessonsPage

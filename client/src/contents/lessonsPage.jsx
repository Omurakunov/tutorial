import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import config  from './configs';
import '../styles/prism/prism.css'


function LessonsPage() {
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
      <pre>
        <code className='language-javascript'>
         console.log('hello world') 
        </code>
      </pre>
    </div>
    
    </>
    
  )
}
export default LessonsPage

import Navbar from '../contents/navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import config  from '../configs/configs';
import Markdown from "markdown-to-jsx";

function LessonsPage() {
  library.add(
    faArrowRight, faArrowLeft
  )
  const params = useParams()
  const [lesson, setLesson] = useState('')
  const [md ,setMd] = useState('')
  const token = localStorage.getItem('jwt')


  useEffect(()=>{
    axios.get(lesson).then(res=>setMd(res.data))
  },[lesson])

  useEffect(()=>{
    lessonReq()
  },[])

  const lessonReq = () =>{
    axios
        .get(`${config.Url}/lesson/lesson-list/${params.id}`,{headers:{'Authorization' : `Token ${token}`}})
        .then(res=>{setLesson(res.data.file)})
  }

  console.log(lesson)


  // const handleClick = () =>{
  //   <Navigate replace to={}></Navigate>
  // }

  return(
    <>
    <Navbar/>
    <div className="lessons-page">
      <Markdown className="theory">
        {md}
      </Markdown>
    </div>
    
    </>
    
  )
}
export default LessonsPage

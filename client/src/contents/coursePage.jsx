import Navbar from "./navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faClock, faStar} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState, useEffect } from "react";
import LessonsCard from "./lessonsCard";
import axios from "axios";
import {useParams} from 'react-router-dom'
import config from './configs';

function CoursePage() {

    library.add(
        faMagnifyingGlass,
        faHeart,
        faThumbsUp,
        faClock,
        faStar
    )
    
    const [course, setCourse] = useState([])
    const params = useParams()
    const [rating, setRating] = useState()
    const [maxRating, setMaxRating] = useState(new Array(5).fill(' '))

    useEffect(()=>{
        courseReq()
        ratingGetReq()
    },[])

    const courseReq = () => {
        axios
        .get(`${config.Url}/course/course-list/${params.id}/`,{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
        .then(res=>{setCourse(res.data)})
      }
    
    const ratingGetReq = () =>{
        axios
        .get(`${config.Url}/rating/`, {headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
        .then(res=>{setRating(res.data.results)})
    }

    const ratingPostReq = (i) => {
        axios
        .post(`${config.Url}/rating/`, {
            ratings: i,
            author: localStorage.getItem('email'),
            course: params.id
        },
        {headers:{
            'Authorization' : `Token ${localStorage.getItem('jwt')}`
        }})
    }

    const handleRating = (i) =>{
        setRating(i+1)
        ratingPostReq(i+1)
    }

    


    return(
        <>
        <Navbar/>
        <div className="course-page">
            <div className="course-review">
                <div className="course-review-img">
                    <img src="https://files.realpython.com/media/Newbie_Watermarked.a9319218252a.jpg" alt="" />
                </div>
                <div className="course-review-info">
                    <h3>{course.name_of_course}</h3>
                    <div className="course-review-info-status">
                        <div className="status-block">
                            {maxRating.map((_, i)=>(
                                rating 
                                ? <button  key={i} id={i}><FontAwesomeIcon icon={faStar} color={i <= rating ? 'rgb(254, 121, 61)' : 'gray'} ></FontAwesomeIcon></button>
                                : <button  key={i} id={i} onClick={()=>{handleRating(i)}}><FontAwesomeIcon  id={i} icon={faStar} color={i <= rating ? 'rgb(254, 121, 61)' : 'gray'} ></FontAwesomeIcon></button>
                            ))}
                            
                        </div>
                    </div>
                    
                    {/* <h5>{course.lessons.length}</h5> */}

                    <button className="save-btn"><FontAwesomeIcon icon={faHeart} color="rgba(254, 121, 61, 1)" size="3x"></FontAwesomeIcon></button>
                </div>
            </div>
            <div className="course-lessons">
                <h2>Видео Уроки</h2>
                {/* <LessonsCard lessons={course.lessons} id={params.id}/> */}
            </div>
        </div>
        </>
    )
}
export default CoursePage
import Navbar from "./navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faClock, faStar} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState, useEffect} from "react";
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
    const [likes, setLikes] = useState()

    useEffect(()=>{
        courseReq()
        likesReq()
        // ratingGetReq()
    },[])

    const courseReq = () => {
        axios
        .get(`${config.Url}/course/${params.id}/`,{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
        .then(res=>{setCourse(res.data)})
    }

    const likesReq = () => {
        axios
        .get(`${config.Url}/course/likes/`,{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
        .then(res=>{setLikes(res.data)})
    }

    const saveReq = () =>{
        axios
        .post(`${config.Url}/course/${params.id}/saved/`,{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
        
    }   

    const handleSave = () =>{
        saveReq()
    }
    console.log(likes)
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
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <p>{course?.lessons?.length} урока</p>
                        </div>
                        <div className="status-block">
                            <button> <FontAwesomeIcon icon={faThumbsUp} size="lg" color="grey"></FontAwesomeIcon></button>
                            <p>{course?.likes} нравиться</p>
                        </div>
                    </div>
                    <button className="save-btn" onClick={handleSave}><FontAwesomeIcon icon={faHeart} color="rgba(254, 121, 61, 1)" size="3x"></FontAwesomeIcon></button>
                </div>
            </div>
            <div className="course-lessons">
                <h2>Видео Уроки</h2>
                <LessonsCard lessons={course.lessons} id={params.id}/>
                
            </div>
        </div>
        </>
    )
}
export default CoursePage
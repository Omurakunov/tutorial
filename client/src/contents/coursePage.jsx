import Navbar from "./navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faClock} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from "react";
import LessonsCard from "./lessonsCard";

function CoursePage() {

    library.add(
        faMagnifyingGlass,
        faHeart,
        faThumbsUp,
        faClock
      )
    
    const [lessons, setLessons] = useState(new Array(20).fill('').map((_, i)=>(
        {
          id: i,
          name:`Введение`,
          time: '22:14'
        }
      )))

    return(
        <>
        <Navbar/>
        <div className="course-page">
            <div className="course-review">
                <div className="course-review-img">
                    <img src="https://files.realpython.com/media/Newbie_Watermarked.a9319218252a.jpg" alt="" />
                </div>
                <div className="course-review-info">
                    <h3>Phyton</h3>
                    <div className="course-review-info-status">
                        <div className="status-block">
                            <FontAwesomeIcon icon={faClock} color="gray"></FontAwesomeIcon>
                            <p>4 часа назад</p>
                        </div>
                        <div className="status-block">
                            <FontAwesomeIcon icon={faThumbsUp} color="gray"></FontAwesomeIcon>
                            <p>4.5</p>
                        </div>
                    </div>
                    
                    <h5>28 уроков</h5>

                    <button><FontAwesomeIcon icon={faHeart} color="rgba(254, 121, 61, 1)" size="3x"></FontAwesomeIcon></button>
                </div>
            </div>
            <div className="course-lessons">
                <h2>Видео Уроки</h2>
                <LessonsCard lessons={lessons}/>
            </div>
        </div>
        </>
    )
}
export default CoursePage
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from "react-router-dom";


function LessonsCard(props) {

  library.add(
    faClock
  )

  
  return(
    <div className="lessons-cards-container">
      {
        props.lessons.map((lesson, i)=>(
          <Link to={'/coursepage/lessonpage'} key={i}>
              <div className="lessons-card" >
                <div className="lesson-id">
                  <h2>{lesson.id < 10 ? `0${lesson.id}` : lesson.id}</h2>
                </div>
            
                <h3>{lesson.name}</h3>
                <div className="status-block">
                  <FontAwesomeIcon icon={faClock} color="gray"></FontAwesomeIcon>
                  <p>28:14</p>
                </div>
              </div>
          </Link>
         
        ))
      }
    </div>
  )
}
export default LessonsCard
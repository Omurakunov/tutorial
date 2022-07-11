import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren, faMessage } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Link} from 'react-router-dom'
function CourseCards(props) {

    library.add(
        faMagnifyingGlass,
        faHeart,
        faThumbsUp,
        faChildren,
        faMessage
      )

 return(
    <div className='cards-container'>
      
    {
      props.courses?.map((course, i)=>(
      <Link to={`/course${course.id}`} key={i}>
      <div className='course-card'>
            <div className='course-card-img'>
                <img src={course?.images[0]?.image} alt="Oops"/>
            </div>
            <div className='course-card-info'>
              <h3>{course.name_of_course}</h3>
              <div className='course-card-info-rating'>
                 {
                  course.likes
                  ? <div className="status-block">
                  <FontAwesomeIcon icon={faThumbsUp} color="black"></FontAwesomeIcon>
                  <p>{`${course.likes} лайков`}</p>
                </div>
                : <div></div>
                }
                
                
              </div>
              <p id="lessons-number">{`${course.lessons.length} урока`}</p>
            </div>
            </div>
      </Link> 
          
       
        
      ))
    }
  </div>
 )   
}
export default CourseCards
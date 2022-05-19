import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Link} from 'react-router-dom'
function CourseCards(props) {

    library.add(
        faMagnifyingGlass,
        faHeart,
        faThumbsUp,
        faChildren
      )
    
      
 return(
    <div className='cards-container'>
      
    {
      props.courses.map((course, i)=>(
      <Link to={'/coursepage'} key={i}>
      <div className='course-card'>
            <div className='course-card-img'>
              <img src={course.img} alt="Oops"/>
            </div>
          
            <div className='course-card-info'>
              <h3>{course.name}</h3>
              <div className='course-card-info-rating'>
                <div className="status-block">
                  <FontAwesomeIcon icon={faChildren} color="black"></FontAwesomeIcon>
                  <p>{`${course.views} просмотров`}</p>
                </div>
                <div className="status-block">
                  <FontAwesomeIcon icon={faThumbsUp} color="black"></FontAwesomeIcon>
                  <p>{`${course.likes} лайков`}</p>
                </div>
                {props.save}
              </div>
              <p id="lessons-number">{`${course.lessons} уроков`}</p>
            </div>
            </div>
      </Link> 
          
       
        
      ))
    }
  </div>
 )   
}
export default CourseCards
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Link} from 'react-router-dom'
function savedCourseCards(props) {

    library.add(
        faMagnifyingGlass,
        faHeart,
        faThumbsUp,
        faChildren
      )
      console.log(props.courses)
 return(
    <div className='cards-container'>
      
    {
      props.courses?.map((course, i)=>(   
        <Link to={`/course${course.id}`} key={i}>
            <div className='course-card'>
                <div className='course-card-img'>
                    <img src={course.course?.images[0]?.image} alt="Oops"/>
                </div>
          
                <div className='course-card-info'>
                    <h3>{course.course?.name_of_course}</h3>
                    <div className='course-card-info-rating'>
                    
                    {
                        course.course?.likes
                        ? <div className="status-block">
                            <FontAwesomeIcon icon={faThumbsUp} color="black"></FontAwesomeIcon>
                            <p>{`${course.course?.likes} лайков`}</p>
                            </div>
                        : <div></div>
                    }
                
                </div>
                    <p id="lessons-number">{`${course.course?.lessons.length} урока`}</p>
                </div>
            </div>
        </Link> 
          
       
        
      ))
    }
  </div>
 )   
}
export default savedCourseCards
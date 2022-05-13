import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

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
        <div className='course-card' key={i}>
          <div className='course-card-img'>
            <img src={course.img} alt="Oops"/>
          </div>
          
          <div className='course-card-info'>
            <h3>{course.name}</h3>
            <div className='course-card-info-rating'>
              <div>
                <FontAwesomeIcon icon={faChildren}></FontAwesomeIcon>
                <p>{`${course.views} просмотров`}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                <p>{`${course.likes} лайков`}</p>
              </div>
            </div>
            <p>{`${course.lessons} уроков`}</p>
          </div>
          
          
        </div>
      ))
    }
  </div>
 )   
}
export default CourseCards
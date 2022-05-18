import video from '../videos/istockphoto-539028812-640_adpp_is.mp4'
import Navbar from './navbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';

function LessonsPage(props) {
  library.add(
    faArrowRight, faArrowLeft
  )
  return(
    <>
    <Navbar/>
    <div className="lessons-page">
      
      <div className='lessons-page-video'>
        <div>
           <video width="1000" height="auto" controls src={video} type="video/mp4" > </video>
        </div>
        <div className='buttons'>
          <button id='previous'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>  Previous</button>
          <button id='next'>Next  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
        
      </div>
      <div className='lessons-page-theory'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia pariatur, neque magnam assumenda iste corporis quo facilis autem, tenetur tempore iure dolorum. Placeat at deleniti dolorem sunt provident doloribus id?
          Non vel esse odio, aut reiciendis minus nihil ratione et quibusdam perspiciatis quis sit commodi, provident qui assumenda magni minima. Dolorem et asperiores dolore quos id quo ipsum magnam ut!
          Ex, perferendis cumque! Odio blanditiis magnam nostrum voluptatem? Eius inventore, quis quas aperiam illum vitae nam iste odio. Nihil pariatur deserunt quos illum odit repellat eveniet explicabo delectus ea aliquid!
        </p>
      </div>
      
    </div>
    
    </>
    
  )
}
export default LessonsPage

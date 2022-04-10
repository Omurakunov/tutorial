import Navbar from "./navbar"
import { useState} from 'react'
import {  faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
function Saved() {
  const [savedSurveys] = useState(new Array(5).fill('').map((_, i)=>(
    {
      id: i,
      img:'https://image.shutterstock.com/image-vector/vector-illustration-green-chalkboard-math-600w-1440952739.jpg',
      name:`Math for HighSchool#${i}`,
      questions: 25,
      done: 0,
      author: 'Adam Sendler'
    }
  )))
  library.add(
    faHeart
  )
    return(
      <>
        <Navbar/>
        <div className="page-container">
          <h1>Saved</h1>
          <div className="cards-container">
            {
              savedSurveys.map((savedSurvey, i)=>(
                <div className='survey-card' key={i}>
                  <div className="survey-card-img"><img src={savedSurvey.img} alt="Oops"/></div>
                  <div className='survey-card-info'>
                    <p>{savedSurvey.name}</p>
                    <p>{savedSurvey.done}/{savedSurvey.questions} Questions</p>
                    <Link to="/authorPage">{savedSurvey.author}</Link>
                  </div>
                  <button id={savedSurvey.id} ><FontAwesomeIcon icon={faHeart} size="4x" color='rgba(0, 0, 0, 0.1)'></FontAwesomeIcon></button>
                </div>
              ))
            }
          </div>
        </div>
        </>
        
    )
}
export default Saved
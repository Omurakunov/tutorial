import { useState } from "react"
import Navbar from "./navbar"
import {Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function AuthorPage() {
  const [ authSurveys, setAuthPage] = useState(new Array(9).fill('').map((_, i) => (
      {id: i,
      img:'https://image.shutterstock.com/image-vector/vector-illustration-green-chalkboard-math-600w-1440952739.jpg',
      name:`Math for HighSchool#${i}`,
      questions: 25,
      done: 0,}
  )))
  library.add(
    faHeart
  )
  return(
    <>
    <Navbar/>
    <div className="cards-container">
      <div className="user-card">
        <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt=""/>
        <div className="card-info">
          <p>Adam Sendler</p>
          <button>Follow</button>
        </div>
      </div>
      <h1>Surveys</h1>
      {
        authSurveys.map((authSurvey,i)=>(
        <div className='survey-card' key={i}>
          <div className="survey-card-img">
            <img src={authSurvey.img} alt="Oops"/>
          </div>
          <div className='survey-card-info'>
            <p>{authSurvey.name}</p>
            <p>{authSurvey.done}/{authSurvey.questions} Questions</p>
          </div>
          <button id={authSurvey.id} ><FontAwesomeIcon icon={faHeart} size="4x" color='rgba(0, 0, 0, 0.1)'></FontAwesomeIcon></button>
                
        </div>
        ))
      }
    </div>
    </>
    
  )
}
export default AuthorPage
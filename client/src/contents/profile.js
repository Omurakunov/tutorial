import Navbar from "./navbar"
import {  faUser, faHeart, faGear } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import {Link} from 'react-router-dom'
function Profile() {
  library.add(
    faUser,
    faHeart,
    faGear
  )
  const [user] = useState(new Array(1).fill("").map((_, i)=>(
    {
      id: i,
      userName: 'Alex_Good',
      email: 'alexGood@gmail.com',
      mySurveys: new Array(5).fill('').map((_, i)=>(
          {
            id: i,
            img:'https://image.shutterstock.com/image-vector/vector-illustration-green-chalkboard-math-600w-1440952739.jpg',
            name:`Math for HighSchool#${i}`,
            questions: 25,
            done: 0
          }
        ))
      
    }
  )))
  return(
    <>
      <Navbar/>
      <div className="page-container">
        <div className="profile-header">
          <h1>Profile</h1>
          <Link to='/profile/settings'><FontAwesomeIcon icon={faGear} className="settings"/></Link>
        </div>
        
        <div className="profile-img-container">
          <FontAwesomeIcon icon={faUser} className="profile-img"/>
        </div>
        <div className="profile-info">
          <h2>{user[0].userName}</h2>
          <p>{user[0].email}</p>
        </div>
        <div className="user-surveys">
          <h2>
            Your survey:
          </h2>
          <div className="cards-container">
            {
              user[0].mySurveys.map((mySurvey, i)=>(
                  <div className="survey-card" key={i}>
                    <div className="survey-card-img">
            <img src={mySurvey.img} alt="Oops"/>
          </div>
                  <div className='survey-card-info'>
                    <p>{mySurvey.name}</p>
                    <p>{mySurvey.done}/{mySurvey.questions} Questions</p>
                  </div>
                </div>
              
              ))
            }
          </div>
        </div>
      </div>
    </>
    
  )
}
export default Profile
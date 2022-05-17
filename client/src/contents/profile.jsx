import Navbar from "./navbar"
import {  faUser, faHeart, faGear, faChildren, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import {Link} from 'react-router-dom'
import CourseCards from "./courseCards";
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
            img:"https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png",
            name:`Phyton ${i}`,
            views:282,
            likes:151,
            lessons:29
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
        <div className="user-courses">
          <h2>
            Пройденные курсы:
          </h2>
          <div className="cards-container">
          {
            <CourseCards courses={user[0].mySurveys}/>  
          }
          </div>
        </div>
      </div>
    </>
    
  )
}
export default Profile


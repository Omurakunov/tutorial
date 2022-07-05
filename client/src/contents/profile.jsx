import Navbar from "./navbar"
import {  faUser, faHeart, faGear} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import {Link} from 'react-router-dom'
import config from './configs'
import axios from "axios"
import { useEffect } from "react";
import CourseCards from "./courseCards";
function Profile() {
  library.add(
    faUser,
    faHeart,
    faGear
  )
  const [history, setHistory] = useState()
  const [user] = useState(new Array(1).fill("").map((_, i)=>(
    {
      id: i,
      userName: 'Alex_Good',
      email: 'alexGood@gmail.com',
      mySurveys: history
    })))

    const historyReq = () =>{
      axios.get(`${config.Url}/course/history/ `,{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
      .then(res=>{setHistory(res.data)})
    }
    useEffect(() => {
      historyReq()
    }, []);

  return(
    <>
      <Navbar/>
      <div className="page-container">
        <div className="profile">
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
        </div>
       
        <div className="user-courses">
          <h1>
            Просмотренные:
          </h1>
            <CourseCards courses={history}/>  
        </div>
      </div>
    </>
    
  )
}
export default Profile


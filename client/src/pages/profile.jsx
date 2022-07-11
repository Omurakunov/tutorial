import Navbar from "../contents/navbar"
import {  faUser, faHeart, faGear} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"
import {Link} from 'react-router-dom'
import config from '../configs/configs'
import axios from "axios"
import { useEffect } from "react";
import CourseCards from "../contents/course-cards";
function Profile() {
  library.add(
    faUser,
    faHeart,
    faGear
  )
  const [history, setHistory] = useState()
  const [user, setUser] = useState()

    const profileReq = () =>{
      axios.get(`${config.Url}/account/info_users/ `,{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
          .then(res=>{setUser(res.data ? res.data.filter(user => user.author.includes(localStorage.getItem('email'))) : null)})
    }

    const historyReq = () =>{
      axios.get(`${config.Url}/course/history/ `,{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
          .then(res=>{setHistory(res.data)})
    }
    useEffect(() => {
      historyReq()
      profileReq()

    }, []);
  console.log(user)
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
          {
            user?.[0]?.image ? <img src={user?.[0]?.image} alt="Oops"/> :
                <FontAwesomeIcon icon={faUser} className="profile-img"/>
          }
        </div>
        <div className="profile-info">
          <h2>{user?.[0]?.name} {user?.[0]?.surname}</h2>
          <p>{user?.[0]?.author}</p>
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


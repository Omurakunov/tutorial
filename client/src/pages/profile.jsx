import Navbar from "../contents/navbar"
import {  faUser, faHeart, faSignOut, faEdit, faSave} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"
import {Link} from 'react-router-dom'
import config from '../configs/configs'
import axios from "axios"
import { useEffect } from "react";
import CourseCards from "../contents/course-cards";
import Avatar from 'react-avatar';
function Profile() {
  library.add(
      faUser,
      faHeart,
      faSignOut,
      faEdit,
      faSave
  )
  const [history, setHistory] = useState()
  const [user, setUser] = useState()
  const [isChangeable, setIsChangeable] = useState(false)
  const initialValues = {firstname:"", lastname:""}
  const [formValues, setFormValues] = useState(initialValues)
  const [err, setErr] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormValues({...formValues, [name]:value })
  }

  const profileDataReq = () =>{
    axios.post(`${config.Url}/account/info_users/`,{
      name: formValues.firstname,
      surname: formValues.lastname,
    },{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
        .then(()=>{setIsChangeable(false)})
        .catch(err=>{
          setErr(err)
          setIsSuccess(false)
        })
  }

  const signOut = () =>{
    localStorage.removeItem('jwt')
    setTimeout(()=>{
      window.location.reload(true)
    },1000)
  }

  const handleSubmit = () =>{
    formValues.firstname && formValues.lastname ? profileDataReq() : setIsChangeable(false)
    window.location.reload(true)
  }

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
  return(
    <body>
      <Navbar/>
      <div className="page-container">
        <div className="profile">
        <div className="profile-header">
          <h1>Profile</h1>
          {
            isChangeable
              ? <button onClick={()=>handleSubmit()} className='settings'><h2>Save</h2></button>
                : <button><FontAwesomeIcon className='settings' icon={faEdit} size='2x' onClick={()=>setIsChangeable(true)}></FontAwesomeIcon></button>
          }
        </div>
          <Avatar name={`${user?.[0]?.name} ${user?.[0].surname}`} size={150} round={true}></Avatar>
          {
            isChangeable
              ? <form>

                  <div className="field">
                    <label>Имя</label>
                    <input name="firstname" value={formValues.firstname} type="text" onChange={e=>{handleChange(e)}} required></input>

                  </div>
                  <div className="field">
                    <label>Фамилия</label>
                    <input name="lastname" value={formValues.lastname} type="text" onChange={e=>{handleChange(e)}} required></input>


                  </div>
                </form>
                :  <div className="profile-info">
                  <h2>{user?.[0]?.name} {user?.[0]?.surname}</h2>
                  <p>{user?.[0]?.author}</p>
                </div>
          }

        </div>
        <button className='sign-out' onClick={()=>{signOut()}}><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> Sign Out</button>
        <div className="user-courses">
          <h1>
            Просмотренные:
          </h1>
            <CourseCards courses={history}/>
        </div>
      </div>
    </body>
    
  )
}
export default Profile


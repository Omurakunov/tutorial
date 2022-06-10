import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import logo from '../pictures/leadev-01.png'
function Navbar(){
    library.add(
        faHeart,
        faHouse,
        faUser
    )
    const [currentUser, setCurrentUser] = useState(false)
    useEffect(()=>{
        validateUser()
    },[])
    const [isOpen, setIsOpen] = useState(false)
    const validateUser = () =>{
        localStorage.getItem('jwt')
        ? setCurrentUser(true)
        :setCurrentUser(null)
    }

    const handleBurger = () =>{
        setIsOpen(!isOpen)  
    }
    return(
        <div className="navbar">
            <Link to={'/'}><img src={logo}></img></Link>
                <ul className={isOpen?'links active':'links'}>
                <li><NavLink to={'/'} className={({isActive})=> isActive ? "active-link": ""}><FontAwesomeIcon icon={faHouse} className="icon"/></NavLink></li>
                <li><NavLink to={'/saved'} className={({isActive})=> isActive ? "active-link": ""}><FontAwesomeIcon icon={faHeart} className="icon"/></NavLink></li>
                <li><NavLink to={'/profile'} className={({isActive})=> isActive ? "active-link": ""}><FontAwesomeIcon icon={faUser} className="icon"/></NavLink></li>
                </ul>
            <div className={isOpen?'navbar-burger open' : 'navbar-burger'} onClick={e=>{handleBurger()}}>
                <div className='burger-btn'></div>
            </div>
        </div>
    )
}
export default Navbar
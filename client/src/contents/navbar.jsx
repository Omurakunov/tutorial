import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import AuthBlock from './authBlock';
function Navbar(){
    library.add(
        faHeart,
        faHouse,
        faUser
    )
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(()=>{
        validateUser()
    },[])
    const [isOpen, setIsOpen] = useState(false)
    const validateUser = () =>{
        localStorage.getItem('token')
        ? setCurrentUser(localStorage.getItem('token'))
        :setCurrentUser(null)
    }

    const handleBurger = () =>{
        setIsOpen(!isOpen)  
    }
    return(
        <div className="navbar">
            <Link to={'/'}><h1>Tutorial App</h1></Link>
            {
                currentUser
                ? <ul className={isOpen ?'links active' :'links'}>
                <li><Link to={'/'}><FontAwesomeIcon icon={faHouse} className="icon"/></Link></li>
                <li><Link to={'/saved'}><FontAwesomeIcon icon={faHeart} className="icon"/></Link></li>
                <li><Link to={'/profile'}><FontAwesomeIcon icon={faUser} className="icon"/></Link></li>
                </ul>
                : <AuthBlock isOpen={isOpen}/>
            }
            <div className={isOpen?'navbar-burger open' : 'navbar-burger'} onClick={e=>{
                handleBurger()
            }}>
                <div className='burger-btn'></div>
            </div>
        </div>
    )
}
export default Navbar
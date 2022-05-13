import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faAngleLeft, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
function Settings(params) {
  const userInfo = {id:1, name:'alex', email:'Alexgood@gmail.com'}
  library.add(
    faAngleLeft,
    faUser,
    faArrowRightFromBracket
)
  return(
    <>
      <div className='page-container'>
        <div className='settings-header'>
          <Link to="/profile"><FontAwesomeIcon icon={faAngleLeft} size="3x"></FontAwesomeIcon></Link>
          <h1>Settings</h1>
          
        </div>
        
        <div className='profile-header'>
          <div className='profile-img-container'>
            {
              userInfo.img 
              ? <img src={userInfo.img} alt=""></img>
              : <FontAwesomeIcon icon={faUser} size="7x"></FontAwesomeIcon>
            }
          </div>
        </div>
        <div className='user-settings'>
          <form>
            <div>
            <label >Name</label>
            <input type="text" id="name" name='name' value={userInfo.name}/>
            </div>
           <div>
           <label>Email</label>
            <input type="text" name='email' id='email' value={userInfo.email}/>
           </div>
          </form>
          <button ><FontAwesomeIcon icon={faArrowRightFromBracket} size="3x"></FontAwesomeIcon></button>
        </div>
      </div>
    </>
  )
}
export default Settings


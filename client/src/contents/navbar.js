import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
function Navbar(){
    library.add(
        faHeart,
        faHouse,
        faUser
    )
    return(
        <div className="navbar">
            <Link to={'/'}><h1>Survey App</h1></Link>
            <ul>
                <li><Link to={'/'}><FontAwesomeIcon icon={faHouse} className="icon"/></Link></li>
                <li><Link to={'/saved'}><FontAwesomeIcon icon={faHeart} className="icon"/></Link></li>
                <li><Link to={'/profile'}><FontAwesomeIcon icon={faUser} className="icon"/></Link></li>
            </ul>
        </div>
    )
}
export default Navbar
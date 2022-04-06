import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar(){
    library.add(
        faHeart,
        faHouse,
        faUser
    )
    return(
        <div className="navbar">
            <h1>Survey App</h1>
            <ul>
                <li><FontAwesomeIcon icon={faHeart} className="icon"/></li>
                <li><FontAwesomeIcon icon={faHouse} className="icon"/></li>
                <li><FontAwesomeIcon icon={faUser} className="icon"/></li>
            </ul>
        </div>
    )
}
export default Navbar
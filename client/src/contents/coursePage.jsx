import Navbar from "./navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faThumbsUp, faChildren } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

function CoursePage() {

    library.add(
        faMagnifyingGlass,
        faHeart,
        faThumbsUp,
        faChildren
      )

    return(
        <>
        <Navbar/>
        <div className="course-page">
            <div className="course-review">
                <div className="course-review-img">
                    <img src="https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png" alt="" />
                </div>
                <div className="course-review-info">
                    <h3>Phyton</h3>
                    <button><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></button>

                </div>
            </div>
            <div className="course-lessons"></div>
        </div>
        </>
    )
}
export default CoursePage
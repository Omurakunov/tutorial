import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
function ProfileDataReg() {
    library.add(
       faFileImage
    )
    const initialValues = {firstname:"", lastname:"", image:null}
    const [formValues, setFormValues] = useState(initialValues)
    const [err, setErr] = useState([])
    const [isSucces, setIsSucces] = useState(false)
    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value })
    }
    return(
        <div className="auth-container">
            <form>
                {
                    formValues.image
                    ? <div className="profile-img-container">
                        <img src={formValues.image} alt="oops"/>
                        <p>{formValues.image}</p>
                        </div>
                        : <div className='avatar'>
                            <div>
                                <label htmlFor="image"><FontAwesomeIcon className="avatar-icon" icon={faFileImage} color="gray" size="4x"/></label>
                            </div>
                            <p>Добавить фото</p>
                            <input type="file" name='image' id="image" value={formValues.image} onChange={e=>{handleChange(e)}}/>
                        </div>
                }

                <div className="field">
                    <label>Имя</label>
                    <input name="firstname" value={formValues.firstname} type="text" onChange={e=>{handleChange(e)}} required></input>

                </div>
                <div className="field">
                    <label>Фамилия</label>
                    <input name="lastname" value={formValues.lastname} type="text" onChange={e=>{handleChange(e)}} required></input>


                </div>
                <button className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}
export default ProfileDataReg
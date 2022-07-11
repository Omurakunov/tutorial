import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import {Navigate} from "react-router-dom";
import axios from "axios";
import config from "../configs/configs";

function ProfileDataReg() {

    library.add(
       faFileImage
    )

    const initialValues = {firstname:"", lastname:"", image:''}
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
            image: formValues.image
        },{headers:{'Authorization' : `Token ${localStorage.getItem('jwt')}`}})
            .then(()=>{setIsSuccess(true)})
            .catch(err=>{
                setErr(err)
                setIsSuccess(false)
            })
    }

    const handleSubmit = () =>{
        profileDataReq()
    }
    console.log(err)
    return(
        <div className='page-container'>
        {
            isSuccess
            ? <Navigate replace to='/'></Navigate>
            :   <div className="auth-container">
                <form onSubmit={()=>handleSubmit()}>
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
        }

        </div>
    )
}
export default ProfileDataReg
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImage} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { Navigate } from "react-router-dom";
import axios from "axios";
import config from "../configs/configs";
import Avatar from 'react-avatar';
function ProfileDataReg() {

    library.add(
       faFileImage
    )

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
            .then(()=>{setIsSuccess(true)})
            .catch(err=>{
                setErr(err)
                setIsSuccess(false)
            })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        profileDataReq()
    }
    console.log(err)
    return(
        <div className='page-container'>
        {
            isSuccess
            ? <Navigate replace to='/'></Navigate>
            :   <div className="auth-container">
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <Avatar name={`${formValues.firstname} ${formValues.lastname}`} round={true} size='150'></Avatar>

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
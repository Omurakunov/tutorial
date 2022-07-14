import axios from "axios"
import { useState } from "react"
import { Link, Navigate } from 'react-router-dom'
import config from "../configs/configs"
function Registration() {
    const initialValues = {email:"", password:"", password_confirmation:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [err, setErr] = useState([])
    const [isSucces, setIsSucces] = useState(false)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value })
    }

    const loginReq = () =>{
        axios
            .post(`${config.Url}/account/login/`,{
                email: formValues.email,
                password: formValues.password
            })
            .then(res=>{
                localStorage.setItem('jwt', res.data?.token)
                localStorage.setItem('email', formValues.email)
                setIsSucces(true)
            })
            .catch(err=>{
                    setErr(err)
                    setIsSucces(false)
                }
            )
    }

    const registrationReq = () =>{
        axios
        .post(`${config.Url}/account/register/`,{
            email: formValues.email,
            password: formValues.password,
            password_confirmation: formValues.password_confirmation
        })
            .then(()=>{loginReq()})
            .catch(err=>{
            setErr(err)
            setIsSucces(false)
        })
        
        
    }
    
    const handleRegistration = (e) =>{
        e.preventDefault()
        setErr([])
        registrationReq()
        e.target.reset()
    }
    console.log(isSucces)
    return(
        <>
            {
                isSucces
                    ? <Navigate replace to='/registration/user-info'></Navigate>
                    :  <div className="page-container">
                        <div className="auth-container">
                            <form onSubmit={e=>{handleRegistration(e)}}>
                                <h1>Registration</h1>
                                <div className="field">
                                    <label>Email</label>
                                    <input name="email" value={formValues.email} type="email" onChange={e=>{handleChange(e)}} required></input>
                                    {err.response?.data?.email||''}
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <input name="password" value={formValues.password} type="password" onChange={e=>{handleChange(e)}} required></input>
                                    {err.response?.data?.password||''}
                                    {err.response?.data?.non_field_errors?.[0]||''}
                                </div>
                                <div className="field">
                                    <label>Password confimation</label>
                                    <input name="password_confirmation" value={formValues.password_confirmation} type="password" onChange={e=>{handleChange(e)}} required></input>
                                    {!!err.response?.data?.password_confirmation||''}
                                    {!!err.response?.data?.non_field_errors?.[0]||''}
                                </div>
                                <button className='submit-btn'>Submit</button>

                                <p>Already have an account?</p>
                                <Link to="/login">Login</Link>


                            </form>
                        </div>


                    </div>
            }
        </>

  
    )
}
export default Registration
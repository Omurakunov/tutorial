import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom'
function Login(props) {
    const initialValues = {email:"", password:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [err, setErr] = useState([])
    const [isSucces, setIsSucces] = useState(false)
    const [token, setToken] = useState([])

    useEffect(()=>{
        localStorage.setItem('token', token )
    },[token])


    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value })
    }


    const registrationReq = () =>{
        axios
        .post('http://164.92.91.86/account/login/',{
            email: formValues.email,
            password: formValues.password
        })
        .then(res=>{
            setToken(res.data?.token)
            setIsSucces(true)
        })
        .catch(err=>{
                setErr(err)
                setIsSucces(false)
            }
        )

    }

    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setErr([])
        registrationReq()
    }
    
    return(
        <>
        {
            isSucces
            ?<Navigate replace to="/"></Navigate>
            : <div className="page-container">
                <div className="auth-container">
                    <form onSubmit={e=>{handleSubmit(e)}}>
                        <h1>Login</h1>
                        
                        <div className="field">
                            <label>Email</label>
                            <input name="email" value={formValues.email} type="email" onChange={e=>{handleChange(e)}} required></input>
                            {err.response?.data?.non_field_errors?.[0]||''}
                            
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input name="password" value={formValues.password} type="password" onChange={e=>{handleChange(e)}} required></input>
                            {err.response?.data?.non_field_errors?.[0]||''}
                        
                        </div>
                        <button>Submit</button>
                        <p>Don't have an account?</p>
                        <Link to='/reagistration'>Registration</Link>
                    </form>
                
                </div>
            </div>
        }
       
        </>
    )
}
export default Login
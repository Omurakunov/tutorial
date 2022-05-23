import axios from "axios"
import { useState } from "react"

function Registration(props) {
    const initialValues = {email:"", password:"", password_confirmation:""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValues({...formValues, [name]:value })
    }
    const validate = (values) =>{
        const errors = {}
        const regex = /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+/g
        if(!values.email){
            errors.email = "Email is required"
        }else if(!regex.test(values.email)){
            errors.email = "Email is not valid"
        }
        if(!values.password){
            errors.password = "Password is required"
        }else if (values.password.length < 4){
            errors.password = "Password length can't be less than 4"
        }else if (values.password.length > 8){
            errors.password = "Password length can't be more than 8"
        }
        if(!values.password_confirmation){
            errors.password_confirmation = "Password confirmation is required"
        }else if ( values.password_confirmation !== values.password ){
            errors.password = "Password doesn't match"
        }
        return errors
    }
    const registrationReq = () =>{
        if(Object.keys(formErrors).length === 0){
            axios
            .post('http://164.92.91.86/account/register/',{
                email: formValues.email,
                password: formValues.password,
                password_confirmation: formValues.password_confirmation
        })
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        registrationReq(formErrors)
    }

    return(
        <div className="page-container">
            <pre>{JSON.stringify(formValues, undefined , 2)}</pre>
            <div className="auth-container">
                <form onSubmit={e=>{handleSubmit(e)}}>
                    <h1>Registration</h1>
                    <div className="field">
                        <label>Email</label>
                        <input name="email" value={formValues.email} onChange={e=>{handleChange(e)}}></input>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input name="password" value={formValues.password} onChange={e=>{handleChange(e)}}></input>
                    </div>
                    <div className="field">
                        <label>Password confimation</label>
                        <input name="password_confirmation" value={formValues.password_confirmation} onChange={e=>{handleChange(e)}}></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
  
    )
}
export default Registration
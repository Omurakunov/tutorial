import { Link } from "react-router-dom";

function AuthBlock(props) {
    console.log(props.isOpen)
    return(
    <div className={props.isOpen ?"auth active" :"auth"}>
        <Link className="login" to="/login">
            LOGIN
        </Link>
        <Link className="registration" to="/registration">Registartion</Link>
    </div>
    )
}
export default AuthBlock
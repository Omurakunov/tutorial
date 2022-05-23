function AuthBlock(props) {
    console.log(props.isOpen)
    return(
    <div className={props.isOpen ?"auth active" :"auth"}>
        <button className="login">
            LOGIN
        </button>
        <button className="registration">
            Registration
        </button>
    </div>
    )
}
export default AuthBlock
import React from "react"
import "./FormContent.css"

function FormRegister (props) {
    return (
        <form className="form">
            <h1>Register</h1>
            <label>First Name</label>
            <input className="input" type="text" name="fname" value={props.fname} onChange={props.handleChange} /><br/>
            <label>Last Name</label>
            <input className="input" type="text" name="lname" value={props.lname} onChange={props.handleChange} /><br/>
            <label>Email</label>
            <input className="input" type="text" name="email" value={props.email} onChange={props.handleChange} /><br/>
            <label>Password</label>
            <input className="input password" type="password" name="pass" value={props.pass} onChange={props.handleChange} /><br/>
            <div className="buttons">
                <button type="button">Register</button>
                <button type="button" name="login" onClick={props.handleChange}>Login</button>
            </div>
        </form>
    )
}

export default FormRegister
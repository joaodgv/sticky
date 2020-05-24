import React from "react"
import "./FormContent.css"

function FormContentLogin(props) {
    return (
        <form className="form">
            <h1>Login</h1>
            <label>Email</label>
            <input className="input" type="text" name="email" value={props.email} onChange={props.handleChange} /><br/>
            <label>Password</label>
            <input className="input password" type="password" name="pass" value={props.pass} onChange={props.handleChange} /><br/>
            <div className="buttons">
                <button type="button">Login</button>
                <button name="register" onClick={props.handleChange}>Register</button>
            </div>
        </form>
    )
}

export default FormContentLogin
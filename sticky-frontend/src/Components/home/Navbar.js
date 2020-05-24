import React from "react"
import "./Navbar.css"

function Navbar(props) {
    return (
        <ul className="navbar">
            <li className="navbar-image"><img src="logo.png" alt="logo" style={{height: 40}}/></li>
            <li className="navbar-item"><button className="button-link" name="home" onClick={props.handleClick}>Home</button></li>
            <li className="navbar-item"><button className="button-link" name="login" onClick={props.handleClick}>Login/Register</button></li>
            <li className="navbar-item"><button className="button-link" name="about" onClick={props.handleClick}>About</button></li>
        </ul>
    )
}

export default Navbar
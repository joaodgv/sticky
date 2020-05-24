import React from "react"

import FormContentLogin from "./FormContentLogin"
import FormRegister from "./FormRegister"

class LoginContent extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            pass: "",
            fname: "",
            lname: "",
            login: true
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        if (name === "login"){
            this.setState({ login: true })
        } else if (name === "register") {
            this.setState({ login: false })
        } else {
            this.setState({[name]: value})
        }
    }

    render() {
        return(
            <div className="containter">
                <img className="image" src="collection.png" alt="stickers"/>
                {this.state.login ? 
                    <FormContentLogin 
                        email={this.state.email} 
                        pass={this.state.pass} 
                        handleChange={this.handleChange}
                    />:
                    <FormRegister 
                        fname={this.state.fname} 
                        lname={this.state.lname}
                        email={this.state.email} 
                        pass={this.state.pass} 
                        handleChange={this.handleChange}
                    />}
            </div>
        )
    }
}

export default LoginContent
import React, { Component } from 'react';
import './App.css';

import Navbar from "./Components/home/Navbar"
import HomeComponent from "./Components/home/HomeComponent"
import LoginContent from "./Components/Login/LoginContent"

class App extends Component {
  constructor() {
	super()
	this.state = {
		current: "home"
	}

	this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
	this.setState({current: event.target.name})
  }

  render() {
	let content
	if(this.state.current === "home") {
		content = <HomeComponent />
	} else if (this.state.current === "login") {
		content = <LoginContent />
	} else if (this.state.current === "about") {
		content = <h1>Placeholder</h1>
	}

	return (
	  <div>
		<Navbar handleClick={this.handleClick}/>
		{content}
	  </div>
	)
  }
}

export default App;

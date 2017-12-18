import React, { Component } from 'react';
import LandingPage from './LandingPage/landingPage.js'  
import { Route } from 'react-router-dom'
import UserForm from './user/user_form'
import axios from 'axios'

export default class App extends Component {
	constructor(){
		super()

    this.state={
      //UserForm Component
      username:'',
      password:'',
      email:'',

      //Subscribe Component
      subscribe_email:''
    } 
	}

  //handle change when user types in input field for signup/login form
   handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  //handle when user submits subscription
  handleSubscribe = (event) =>{
    event.preventDefault()

    //SERVER SIDE ISSUE WITH AXIOS POST REQUEST
    const url = 'http://dev3.apppartner.com/Reactors/scripts/add-email.php';
    axios.post(url, {email: this.state.email})
      .then(function(response){
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  //handle when user clicks Sign Up Button
  handleSignUp = (event) =>{
    event.preventDefault()
    const {username, password, email} = this.state
    // console.log({email, password, username})
    axios.post('http://dev3.apppartner.com/Reactors/scripts/user-signup.php',{username, password, email})
      .then(function(response){
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  //handle when user clicks Log In Button
  handleLogIn = (event) =>{
    event.preventDefault()
    const {email, password} = this.state
    // console.log({email, password})

    axios.post('http://dev3.apppartner.com/Reactors/scripts/user-login.php', {email, password})
      .then(function(response){
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  render() {
    return (
    	<div>
    		<Route exact path='/' render={() => 
          (<LandingPage handleSubscribe={this.handleSubscribe} subscribe_email={this.state.subscribe_email}
            handleChange={this.handleChange}/>
          )} 
        />

  			<Route exact path='/login' render={() => 
          (<UserForm username={this.state.username} password={this.state.password} 
            email={this.state.email} handleChange={this.handleChange} 
            handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp}/>
          )} 
        />
    	</div>
  
    );
  }
}

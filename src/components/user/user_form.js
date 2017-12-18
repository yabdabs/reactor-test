import React, { Component } from 'react'
import SignUp from './sign-up'
import LogIn from './login'
import { Link } from 'react-router-dom'

export default class UserForm extends Component{
	constructor(){
		super()

		this.state={
			signUpClick:false,
			logInClick: true,
		}
	}

  logInClick = () =>{
    this.setState({
      logInClick: true,
      signUpClick: false
    })
  }

   signUpClick = () =>{
    this.setState({
      signUpClick: true,
      logInClick: false
    })
  }


	renderForm = () =>{
		if(this.state.logInClick === true){
				return(
					<LogIn password={this.state.password} email={this.state.email} signUpClick={this.signUpClick}
					 handleChange={this.props.handleChange} handleLogIn={this.props.handleLogIn}
					/>
				)
			}
		else{
			return(
				<SignUp username={this.state.username} password={this.state.password} handleSignUp={this.props.handleSignUp}
					email={this.state.email} logInClick={this.logInClick} handleChange={this.props.handleChange}
				/>
			)
		}
	}

	render(){

		return(
			<div>
				<div className='row form-page'>
					<div className='col s1 offset-m1'><Link to='/'><h6>Reactor</h6></Link></div>

					<div className='col s12 m4 offset-m2 form-col'>
						<div className='form-box'>

							{this.renderForm()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
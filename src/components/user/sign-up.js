import React, { Component } from 'react'

export default class SignUp extends Component{
	constructor(){
		super()

	}

	render(){
		return(
			<div>
				<div className='login-inactive'><a href="#" onClick ={this.props.logInClick}>LOG IN</a></div>
				<div className='signup-active'><a href="#">SIGN UP</a></div>

				<form onSubmit={this.props.	handleSignUp}>
					<input 
						type="text"
						placeholder='Username' 
						name='username' 
						className='username' 
						value= {this.props.username}
						onChange={this.props.handleChange}
					/>
					<input 
						type="email" 
						placeholder='reactor@apppartner.com' 
						name='email' 
						className='user_email' 
						onChange= {this.props.handleChange}
						value={this.props.email}
					/>
					<input 
						type="password" 
						placeholder='Password' 
						name='password' 
						className='user_pass'
						onChange={this.props.handleChange}
						value= {this.props.password}
					/>
					<button 
						type='submit' 
						className='submit_user'>
						SIGN UP
					</button>
				</form>
			</div>
		)
	}
}
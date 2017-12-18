import React, { Component } from 'react'

export default class LogIn extends Component{
	constructor(){
		super()

	}

	render(){
		return(
			<div>
				<div className='login-active'>
					<a href="#">LOG IN</a>
				</div>
				<div className='signup-inactive'>
					<a href="#" onClick={this.props.signUpClick}>SIGN UP</a>
				</div>

				<form onSubmit={this.props.handleLogIn}>
					<input 
						type='email' 
						placeholder='reactor@apppartner.com' 
						className='user_email' 
						name='email'
						onChange= {this.props.handleChange}
						value={this.props.email}
					/>
					<input 
						type="password" 
						placeholder='Password' 
						name='password'
						className='user_pass'
						onChange = {this.props.handleChange}
						value={this.props.password}
					/>
					<button 
						type='submit' 
						className='submit_user'>
						LOG IN
					</button>
				</form>
			</div>
		)
	}
}
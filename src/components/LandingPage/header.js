import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component{
	render(){
		return(
			<div>
				<div className='row header'>
					<div className='col s2'>
						<Link to='/'><h6>Reactor</h6></Link>
					</div>

					<div className='col s8 hello'>
						<h1>Hello, welcome to Reactor</h1>
					</div>

						<div className='col s2'>
							<Link to='/login'><h6>Log In</h6></Link>
						</div>
				</div>
			</div>	
		)
	}
}
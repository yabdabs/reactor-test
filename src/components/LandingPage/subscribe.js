import React, { Component } from 'react'
import axios from 'axios'

export default class Subscribe extends Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div className='subscribe-section'>
				<div className='row'>
					<div className='col s12'>
						<h2>SUBSCRIBE TO NEWSLETTER</h2>
					</div>
				</div>

				<div className='row'>
					<div className='col s12'>
						<form onSubmit={this.props.handleSubscribe}>
							<div className='form-div'>
								<input 
									type="email" 
									placeholder='Your Email' 
									className='subscribe_email'
									name= 'subscribe_email'
									onChange={this.props.handleChange}
									value= {this.props.subscribe_email}
									/>
								<button type='submit' className='subscribe-btn'>Subscribe</button>
							</div>
						</form>
					</div>
				</div>
			</div>

		)
	}
}
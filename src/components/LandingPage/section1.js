import React, { Component } from 'react'

export default class Section1 extends Component{
	render(){
		return(
			<div className='row section1'>
				<div className= 'col s6'>
					<h2>WHAT WE DO</h2>
				</div>

				<div className= 'col s6'>
					<div>
						<h4>We Do</h4>
					</div>

					<div className='section1-txt'>
						<p>The quick, brown fox jumps over a lazy dog.
						DJs flock by when MTV ax quiz prog.
						Junk MTV quiz graced by fox whelps.
						Bawds jog, flick quartz, vex nymphs</p>
					</div>
				</div>
			</div>
		
		)
	}
}
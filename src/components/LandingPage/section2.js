import React, { Component } from 'react'

export default class Section2 extends Component{
	constructor(){
		super()

	}

	render(){
		return(
			<div className='row section2'>
			
				<div className='col m6 s12'>
					<div className='section2-left-img'>
						<img src="/images/1.png" alt="desk chair" className='desk-image'/>
					</div>

					<div className= 'section2-left-txt'>
						<h4>Regional Cuisine Down Southern Cooking</h4>
						<p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
						Junk MTV quiz graced by fox whelps.
						Bawds jog, flick quartz, vex nymphs</p>
					</div>
				</div>

				<div className='col m6 s12'>
					<div className='section2-right-img'>
						<img src="/images/2.png" alt="coffee" className='coffee-img'/>
					</div>

					<div className= 'section2-right-txt'>
						<h4>Regional Cuisine Down Southern Cooking</h4>
						<p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
						Junk MTV quiz graced by fox whelps.
						Bawds jog, flick quartz, vex nymphs</p>
					</div>
				</div>
			</div>
		)
	}
}
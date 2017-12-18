import React, { Component } from 'react'

export default class Section3 extends Component{
	render(){
		return(
			<div className='section3'>
				<div className='row'>
					<div className='section3-title'>
					<h3>Maui By Air The Best Way Around The Island</h3>
					</div>
				</div>

				<div className='row'>
					<div className='col m3 s12'>
						<div className='section3-img'>
							<img src="/images/3.png" alt="man" className='man'/>
						</div>

						<h5>East Josianefurt</h5>
						<div className='caption'>085 Daron Via</div>
					</div>{/*End first image */}

					<div className='col m3 s12'>
						<div className='section3-img'>
							<img src="/images/4.png" alt="man" className='man'/>
						</div>

						<h5>South Christopherport </h5>
						<div className='caption'>162 Chandler Ville</div>
					</div>{/*End second image */}

					<div className='col m3 s12'>
						<div className='section3-img'>
							<img src="/images/5.png" alt="man" className='man'/>
						</div>

						<h5>Concepcionbury</h5>
						<div className='caption'>7643 Kylie Burgs</div>
					</div>{/*End third image */}

					<div className='col m3 s12'>
						<div className='section3-img'>
							<img src="/images/6.png" alt="man" className='man'/>
						</div>

						<h5>Reychester</h5>
						<div className='caption'>5590 Gabe Views Apt. 044</div>
					</div>{/*End fourth image */}
				</div>
			</div>

		)
	}
}
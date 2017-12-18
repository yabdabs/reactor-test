import React, { Component } from 'react';
import Header from './header.js'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Subscribe from './subscribe'
import Footer from './footer'

export default class LandingPage extends Component {
  render() {
    return (
	    <div>
	    	<Header />
	    	<Section1 />
	    	<Section2 />
	    	<Section3 />
	    	<hr/>
	    	<Subscribe handleSubscribe={this.props.handleSubscribe}
	    		handleChange={this.props.handleChange} subscribe_email={this.props.subscribe_email}
	    	/>
	    	<Footer />
	    </div>
    );
  }
}

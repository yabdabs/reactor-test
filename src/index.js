import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter interacts with the history library and decides what to do 
//based on a change in the url
//Route purpose is for the configuration of showing a certain component based on the url
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './components/app.js';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<BrowserRouter>
		<App />
  </BrowserRouter>
  , document.querySelector('.mainComp'));

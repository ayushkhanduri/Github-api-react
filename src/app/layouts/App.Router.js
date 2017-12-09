import React from 'react';
import {Provider} from 'react-redux';
import { Router,Route} from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

import initialState from '../config/initState.config';
import configureState from '../config/store.config';

import Home from  '../components/App/MainApp.container';

const browserHistory = new createBrowserHistory();

const AppRouter = () => (
	<Provider store= {configureState({initialState})}>
		<Router history={browserHistory}>
			<div>
				<Route exact path="/" component={Home}/>
			</div>
		</Router>
	</Provider>

);

export default AppRouter;
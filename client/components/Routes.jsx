import React from 'react'

import App from './App.jsx'
import Home from './Home/Home.jsx'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
)

export default function Routes() { return routes }
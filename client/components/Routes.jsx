import React from 'react'

import Base from './Base.jsx'
import Home from './Home.jsx'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Base}>
			<IndexRoute component={Home} />
		</Route>
	</Router>
)

const Routes = function() {
	return routes
}

export default Routes
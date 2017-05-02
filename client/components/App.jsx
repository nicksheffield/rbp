import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props)

		// State
		this.state = {
			
		}

		// Events
	}

	render() {
		let props = {
			// Put props for subpages here
		}

		return React.cloneElement(this.props.children, props)
	}
}

export default App
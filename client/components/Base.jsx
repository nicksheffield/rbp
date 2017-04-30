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
		return (
			<div className="Base">
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

export default App
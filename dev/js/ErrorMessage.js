import React from 'react';

class ErrorMessage extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="error-message">
				<strong>{this.props.type}</strong>
				<p>{this.props.message}</p>
			</div>
		)
	}
}

export default ErrorMessage;
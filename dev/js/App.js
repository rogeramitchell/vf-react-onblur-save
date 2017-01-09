import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="App">
				<p>test test</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
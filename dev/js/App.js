import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import { getUrlParameters } from './Helpers';
import { getAccount } from './DataHandler';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			Account: {},
			Errors: []
		}
	}

	componentWillMount() {
		const accountId = getUrlParameters()['id'];
		getAccount(this, 'accountId');
	}

	render() {
		return (
			<div className="App">
				<h4>Errors</h4>
				<p>test test</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
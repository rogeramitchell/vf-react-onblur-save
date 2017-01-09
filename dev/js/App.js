import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css';
import { getUrlParameters } from './Helpers';
import { getAccount } from './DataHandler';
import ErrorMessage from './ErrorMessage';
import AccountForm from './AccountForm';

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
		getAccount(this, accountId);
	}

	render() {
		return (
			<div className="App">
				<h4>Errors</h4>
				{
					this.state.Errors.length > 0 ? 
					this.state.Errors.map(item => 
						<ErrorMessage key={item} type={item.type} message={item.message} />
					) : null
				}
				<h4>Account Details</h4>
				{
					'Id' in this.state.Account ? 
					<AccountForm Account={this.state.Account} /> : 
					null
				}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';

class AccountForm extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(event) {
		let account = this.props.Account;
		account[event.target.id] = event.target.value;
		this.props.handleChange(account);
	}

	handleBlur() {
		this.props.handleBlur();
	}

	render() {
		return (
			<div>
				<form>
					<label htmlFor="Name">Name</label>
					<input id="Name" disabled={this.props.DisableInputs} type="text" onBlur={this.handleBlur} onChange={event => this.handleChange(event)} value={this.props.Account.Name}/>
					<br />

					<label htmlFor="BillingStreet">Street</label>
					<input id="BillingStreet" disabled={this.props.DisableInputs} type="text" onBlur={this.handleBlur} onChange={event => this.handleChange(event)} value={this.props.Account.BillingStreet}/>
					<br />

					<label htmlFor="BillingCity">City</label>
					<input id="BillingCity" disabled={this.props.DisableInputs} type="text" onBlur={this.handleBlur} onChange={event => this.handleChange(event)} value={this.props.Account.BillingCity}/>
					<br />

					<label htmlFor="BillingState">State</label>
					<input id="BillingState" disabled={this.props.DisableInputs} type="text" onBlur={this.handleBlur} onChange={event => this.handleChange(event)} value={this.props.Account.BillingState}/>
					<br />

					<label htmlFor="BillingPostalCode">Postal Code</label>
					<input id="BillingPostalCode" disabled={this.props.DisableInputs} type="text" onBlur={this.handleBlur} onChange={event => this.handleChange(event)} value={this.props.Account.BillingPostalCode}/>
					<br />

					<label htmlFor="BillingCountry">Country</label>
					<input id="BillingCountry" disabled={this.props.DisableInputs} type="text" onBlur={this.handleBlur} onChange={event => this.handleChange(event)} value={this.props.Account.BillingCountry}/>
					<br />
				</form>
			</div>
		)
	}
}

export default AccountForm;
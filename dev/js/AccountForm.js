import React from 'react';

class AccountForm extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<form>
					<label htmlFor="Name">Name</label>
					<input id="Name" type="text" value={this.props.Account.Name}/>
					<br />

					<label htmlFor="BillingStreet">Street</label>
					<input id="BillingStreet" type="text" value={this.props.Account.BillingStreet}/>
					<br />

					<label htmlFor="BillingCity">City</label>
					<input id="BillingCity" type="text" value={this.props.Account.BillingCity}/>
					<br />

					<label htmlFor="BillingState">State</label>
					<input id="BillingState" type="text" value={this.props.Account.BillingState}/>
					<br />

					<label htmlFor="BillingPostalCode">Postal Code</label>
					<input id="BillingPostalCode" type="text" value={this.props.Account.BillingPostalCode}/>
					<br />

					<label htmlFor="BillingCountry">Country</label>
					<input id="BillingCountry" type="text" value={this.props.Account.BillingCountry}/>
					<br />
				</form>
			</div>
		)
	}
}

export default AccountForm;
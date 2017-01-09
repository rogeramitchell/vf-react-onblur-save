export function getAccount(context, accountId) {
	Visualforce.remoting.Manager.invokeAction(
		'PromisesController.getAccount',
		accountId,
		function(result, event) {
			if(event.statusCode == 200) {
				context.setState({
					Account: result
				})
			} else {
				let error = {};
				error.type = event.type;
				error.message = event.message;

				let existingErrors = context.state.Errors;
				existingErrors.push(error);

				context.setState({
					Errors: existingErrors
				})
			}
		});
}
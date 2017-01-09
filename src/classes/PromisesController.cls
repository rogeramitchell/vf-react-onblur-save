public class PromisesController 
{
	@RemoteAction
	public static Account getAccount(Id accountId)
	{
		return [SELECT Id, Name, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry FROM Account WHERE Id = :accountId];
	}

	@RemoteAction
	public static Account saveAccount(Account account)
	{
		update account;

		return getAccount(account.Id);
	}
}
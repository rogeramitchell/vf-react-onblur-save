public class PromisesController 
{
	@RemoteAction
	public static Account getAccount(Id accountId)
	{
		return [SELECT Id, Name, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry FROM Account WHERE Id = :accountId];
	}
}
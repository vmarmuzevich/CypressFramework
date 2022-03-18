@PSP-18397
Feature: Access Management - Chrome - Verify Demo1

	@TEST_PSP-18396
	Scenario: Successful login attempt
		Given User is on the login page
		When User enters login 'admin' 
		And User enters password 'iDocket.123'
		And clicks login button
		Then User should be navigated to home page

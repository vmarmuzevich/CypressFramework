Feature: User login 
As a user I want to log in

Background: User is already on the login page
Given User is on the login page

@first
Scenario: Successful login attempt
When User enters login 'admin' 
And User enters password 'iDocket.123'
And clicks login button
Then User should be navigated to home page

@second
Scenario: unsuccessful login attempt
When User enters login 'admin' 
And User enters password ' iDocket.123'
And clicks login button
Then User should stay on the login page
  
    

